import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/header';
import Footer from './components/footer';
import SearchBar from './components/searchBar';

// import jobSchema from '../../server/models/Job'

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
          <SearchBar placeholder="Search here.. "/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login/employer"component={Employerlogin} />
            <Route path="/login/jobseeker" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/postjobs">
              <div>
                <h1> Post Jobs</h1>
              </div>
            </Route>
            <Route path="/searchjobs">
              <div>
                <h1> Search Jobs</h1>
              </div>
            </Route>
          </Switch>
          <Footer />
        </div>
        
      </Router>
    </ApolloProvider>
  );
}

export default App;
