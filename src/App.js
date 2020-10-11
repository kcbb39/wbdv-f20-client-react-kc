import React from 'react'
//import logo from './logo.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
//import HelloWorld from "./components/HelloWorld"
import CourseCard from "./components/CourseCard"
import ModuleList from "./components/ModuleList";
import CourseManager from "./components/CourseManager";

function App() {
    return (
        <div className="container">
            <CourseManager/>
        </div>
    )
}

export default App
