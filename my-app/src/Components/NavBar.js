import React from 'react'
import 'reactjs-popup/dist/index.css';
import * as ReactBootStrap from 'react-bootstrap';
import './NavBar.css'
import { useState } from 'react';
import Popup from './PopUpAddGame';
import DataFetchingService from '../Services/DataFetchingService';
import {SearchSet} from '../Services/DataFetchingService.js'
import {DeleteSet} from '../Services/DataFetchingService.js'
import { isInaccessible } from '@testing-library/react';

let FalseSearchPosition = "Search by year" 
let TrueSearchPosition = "Search by name"
let SearchPosition = "Search by year"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const Refresh = () => {
    window.location.reload();
  }

  const DeleteFunction = () => {
    DeleteSet();
  }

  const Favorite = () => {
    SearchSet("", SearchPosition, true);
  
  }

  const SearchByYear = () => {
    if (isOpened){
      SearchPosition = FalseSearchPosition;
    }
    else if (!isOpened) {
      SearchPosition = TrueSearchPosition;
    }
    else{
      SearchPosition = FalseSearchPosition;
    }
    setIsOpened(!isOpened);
  }

  const [q, setQ] = useState('');
  const Search = () => {

    SearchSet(q, SearchPosition);
  }
    return (
      <div className="mian-NavBar">
          <div className="container">
              <div className="row">
              <ReactBootStrap.Navbar bg="light" expand="lg">
  <ReactBootStrap.Container fluid>
    <ReactBootStrap.Navbar.Brand href="#" onClick={Refresh}>GameLibrary</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
    <ReactBootStrap.Navbar.Collapse id="navbarScroll">
      <ReactBootStrap.Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <ReactBootStrap.Nav.Link href="#action1" onClick={Refresh}>Home</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#action2" onClick={Favorite}>Favorite</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Actions" id="navbarScrollingDropdown">
          <ReactBootStrap.NavDropdown.Item href="#action3" onClick={togglePopup} >Add game</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action4" onClick={DeleteFunction}>Delete game</ReactBootStrap.NavDropdown.Item>
          {false &&  <ReactBootStrap.NavDropdown.Divider />}
         {false && <ReactBootStrap.NavDropdown.Item href="#action5"  onClick={SearchByYear}>{SearchPosition}</ReactBootStrap.NavDropdown.Item>}
        </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
      <ReactBootStrap.Form className="d-flex">
        <ReactBootStrap.FormControl
          id="SearchBox"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <ReactBootStrap.Button variant="outline-success" onClick={Search}>Search</ReactBootStrap.Button>
      </ReactBootStrap.Form>
      
      
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
                {isOpen && <Popup/>}
                 </div>
              </div>
          </div>
    );
  }
  
  export default NavBar;