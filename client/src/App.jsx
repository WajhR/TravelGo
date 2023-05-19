import React from "react";
// import { useEffect, useState } from 'react';
// import axios from "axios";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./components/Home"

import MapSearch from "./pages/Map";
import Dashboard from "./pages/Dashboard";


import Login from './pages/Login';
import Signup from './pages/Signup';
import Authpage from "./pages/Authpage";
import './index.css';

// import Header from "./components/Header";


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),

});

function App() {
  //   const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     axios.get('/auth/authenticated')
  //       .then(res => {
  //         setUser(res.data.user);
  //       })
  //   }, []);


  // const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Routes>
            <Route path="/" element={<Landing />} className="hover-underline-animation"/>
            <Route path="/landing" element={<Landing />} className="hover-underline-animation"/>
            <Route path="/home" element={<Home />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/map" element={<MapSearch />}/>
            <Route path="/auth" element={<Authpage />}/>
            <Route path="login" element={<Login />}/>
            <Route path="signup" element={<Signup />}/>
            {/* <Route path="/TravelGo/Logout" element={<Logout />}/> */}

          </Routes>

        </div>
        </Router>
    
      </ApolloProvider>
      
  );
};


export default App;