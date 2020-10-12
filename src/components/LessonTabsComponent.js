import React from "react";

//const CourseCardContainer = ({course, selectCourse}) =>
const LessonTabsComponent = () => (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link wbdv-lesson-tabs" href="#">Build</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link wbdv-lesson-tabs" href="#">Pages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link wbdv-lesson-tabs" href="#">Theme</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link wbdv-lesson-tabs" href="#">Store</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link wbdv-lesson-tabs" href="#">Apps</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link wbdv-lesson-tabs" href="#">Settings</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="wbdv-lesson-add-btn"><i className="fa fa-plus"/></a>
                </li>
            </ul>
        )
export default LessonTabsComponent