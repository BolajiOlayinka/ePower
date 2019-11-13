import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Card from './Card';


function App() {
  return (
    <React.Fragment>
    <Header/>
    {/* <Body/> */}
    <Card/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
