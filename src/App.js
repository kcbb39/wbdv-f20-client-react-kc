import React from 'react'
//import logo from './logo.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
//import HelloWorld from "./components/HelloWorld"
import CourseCardContainer from "./components/CourseCardContainer"
import ModuleListContainer from "./components/ModuleListContainer";
import CourseManagerContainer from "./components/CourseManagerContainer";

function App() {
    return (
        <div className="container">
            <CourseManagerContainer/>
        </div>
    )
}

export default App
