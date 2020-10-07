import React from 'react';
import logo from './logo.svg';
import './App.css'
import CourseCard from './components/CourseCard'
import ModuleList from './components/ModuleList'


import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
   <div className="container">
      <h1>Whiteboard</h1>
      <ModuleList/>
       <div className="card-deck">
         <CourseCard/>
         <CourseCard/>
       </div>
   </div>
  );
}

export default App;
