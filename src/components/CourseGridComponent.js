import React from 'react'
import CourseCardContainer from "../containers/CourseCardContainer";
import {Link} from "react-router-dom";

const CourseGridComponent = ({courses, selectCourse, deleteCourse}) =>
    (
        <div className="container">
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
                    <Link className="icon" to="/course/grid"><i className="fa fa-table"/></Link>
                    <Link className="icon" to="/course/table"><i className="fa fa-list"/></Link>
                    <a href="#" className="icon"><i className="fa fa-sort"/></a>
                </div>
            </nav>
            <div className="card-deck row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                {  courses.map((course, key) =>
                    <CourseCardContainer course={course}
                                         selectCourse={selectCourse}
                                         deleteCourse={deleteCourse}
                                         key={key}/>)}
            </div>

        </div>
    )
export default CourseGridComponent