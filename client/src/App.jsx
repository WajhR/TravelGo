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
import Landing from "./components/Landing";
import Home from "./components/Home"
import './index.css';
import Login from './pages/Login';
import Signup from './pages/Signup';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
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
    return(
      <ApolloProvider client={client}>
    <div>
        <Router>
          <Routes>
            <Route 
            path="/" 
            element={<Landing />} 
            className="hover-underline-animation"/>
            <Route 
            path="/TravelGo/Landing" 
            element={<Landing />} 
            className="hover-underline-animation"/>
            <Route 
            path="/TravelGo/Home" 
            element={<Home />}/>
            <Route 
            path="/TravelGo/Login" 
            element={<Login />} 
            className="hover-underline-animation"/>
            <Route 
            path="/TravelGo/Signup" 
            element={<Signup />} 
            className="hover-underline-animation"/>
            
          
          </Routes>
        </Router>
    </div>
    </ApolloProvider>
    );
};


export default App;