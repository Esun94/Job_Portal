import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Auth from './utils/auth';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/header';
import Footer from './components/footer';
import SearchBar from './components/searchBar';
import PostJob from './components/postJobForm';
import JobPackages from './components/jobPricePackages';

import Employerlogin from './pages/EmployerLogin';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <main className="flex-shrink-0">
            <div className="container">
              <Switch>
                <Route exact path="/">
                  {Auth.loggedIn() ? (
                    Auth.getLoggedInUserType() === 'user' ? (
                      <Redirect to="/searchjobs" />
                    ) : (
                      <Redirect to="/postjobs" component={PostJob}/>
                    )
                  ) : (
                    <Home />
                  )}
                </Route>
                <Route path="/login/employer" component={Employerlogin} />
                <Route path="/login/jobseeker" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/postjobs" component={PostJob} />
                <Route path="/searchjobs" component={SearchBar}>
                  {/* <div>
                    <h1> Search Jobs</h1>
                    <SearchBar placeholder="Search for Jobs Here..." />
                  </div> */}
                </Route>
                <Route path="/jobpackages" component={JobPackages}></Route>
              </Switch>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
