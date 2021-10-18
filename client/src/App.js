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
import EmployerDashboard from './pages/employer/dashboard';
import JobseekerDashboard from './pages/jobSeeker/dashboard';

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
        <Header />
        <div style={{ flex: '1 0 auto', marginBottom: '100px' }}>
          <Switch>
            <Route exact path="/">
              {Auth.loggedIn() ? (
                Auth.getLoggedInUserType() === 'user' ? (
                  <Redirect to="/jobseeker/dashboard" />
                ) : (
                  <Redirect
                    to="/employer/dashboard"
                    component={EmployerDashboard}
                  />
                )
              ) : (
                <Home />
              )}
            </Route>
            <Route path="/login/employer" component={Employerlogin} />
            <Route path="/login/jobseeker" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/employer/dashboard" component={EmployerDashboard} />
            <Route path="/employer/postjobs" component={PostJob} />
            <Route path="/employer/jobpackages" component={JobPackages}></Route>
            <Route path="/jobseeker/dashboard" component={JobseekerDashboard} />
            <Route path="/jobseeker/searchjobs" component={SearchBar}></Route>
          </Switch>          
        </div>        
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
