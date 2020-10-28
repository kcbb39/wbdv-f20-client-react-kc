import React from 'react'
//import logo from './logo.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
//import HelloWorld from "./components/HelloWorld"
import CourseCardContainer from "./containers/CourseCardContainer"
import ModuleListContainer from "./containers/ModuleListContainer";
import CourseManagerContainer from "./containers/CourseManagerContainer";

function App() {
    return (
        <div className="container">
            <CourseManagerContainer />
        </div>
    )
}

export default App
