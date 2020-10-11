import React from 'react'
import CourseCard from "./CourseCard";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, selectCourse, deleteCourse}) =>
    (
        <div className="container">
            <nav className="navbar navbar-dark bg-primary">
                <div className="row mr-sm-2">
                    <button className="navbar-toggler sm-2 navButtons" type="button" data-toggle="collapse"
                            data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon wbdv-field wbdv-hamburger"/>
                    </button>
                    <a className="navbar-brand navButtons wbdv-label mr-sm-2 wbdv-course-manager" href="#">Course Manager</a>
                    <form className="form-inline navButtons sm-2">
                        <input className="form-control mr-sm-2 wbdv-field wbdv-new-course" type="search"
                               placeholder="New Course Title" aria-label="New Course Title"/>
                        <button className="btn btn-outline-success my-2 my-sm-0 wbdv-button wbdv-add-course"
                                type="submit">Add
                        </button>
                    </form>
                </div>
            </nav>
            <nav className="navbar navbar-light">
                <a className="navbar-brand courseElement mr-sm-2 wbdv-header wbdv-title">Recent Courses</a>
                <div className="dropdown">
                    <button className="btn btn-secondary courseElement dropdown-toggle wbdv-header wbdv-owner"
                            type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                        Owner
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Me</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div className="icons row">
                    <Link class="icon" to="/course/grid"><i className="fa fa-table"/></Link>
                    <Link class="icon" to="/course/table"><i className="fa fa-list"/></Link>
                    <a href="#" className="icon"><i className="fa fa-sort"/></a>
                </div>
            </nav>
                <div className="card-deck row col-sm-3 col-lg-6">
                    {  courses.map((course, key) =>
                        <CourseCard course={course}
                                    selectCourse={selectCourse}
                                    deleteCourse={deleteCourse}
                                    key={key}/>)}
                </div>
        </div>
    )
export default CourseGrid