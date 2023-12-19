import React from "react";

import Home from "../pages/Home";
import Services from "../pages/Services";
//import Contact from "../pages/Contact";
import Contact from "../components/UI/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Tutorial from "../pages/Computer";
import Notes from "../pages/Notes";
//import Students from "../pages/Students";
//import Students from "../components/CreateStudent";
import CreateStudent from "../components/CreateStudent";
import EditStudent from "../components/EditStudent";
import StudentList from "../components/StudentList";

import CreateNote from "../components/Notes/CreateNotes";
import EditNote from "../components/Notes/EditNotes";
import NoteList from "../components/Notes/NotesList";


//import Doctors from "../pages/Doctors/Doctors";
//import DoctorDetails from "../pages/Doctors/DoctorDetails";



import {Routes, Route} from 'react-router-dom'

const Routers = () => {
    return (
        <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/home" element = {<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/register" element = {<Signup/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/services" element = {<Services/>} />  
        <Route exact path="/tutorial" element = {<Tutorial/>} /> 
        <Route exact path="/notes" element = {<Notes/>} />  
        <Route exact path="/note-list" element = {<NoteList />} />        
      </Routes> 
    )
   
};
export default Routers