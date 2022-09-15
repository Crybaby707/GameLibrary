import React from 'react';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar'
import './App.css'
import * as ReactBootStrap from 'react-bootstrap';
import DataFetchingService from './Services/DataFetchingService';
import Card from './Components/Card';
import {useState} from 'react';


function App() {
    const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="page-container">
    <div className="content-wrap">
    <div className="Navbar">
    
    
    <NavBar/>
    </div>
    <DataFetchingService/>

    
    </div>
    <div className="footer">
     <Footer />
     
     </div>
    </div>
  );
}

export default App;
