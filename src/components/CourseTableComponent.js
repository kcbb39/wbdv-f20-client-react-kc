import React from 'react'
import CourseRowContainer from "../containers/CourseRowContainer";
import {Link} from "react-router-dom";

const CourseTableComponent = ({courses, selectCourse, deleteCourse}) =>
    (<div>
        <table className="table">
            <thead>
                <tr>
                    <th>
                        <a className="navbar-brand courseElement mr-sm-2 wbdv-header wbdv-title">Course Title</a>
                    </th>
                    <th>
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
                    </th>
                    <th>
                        <div className="icons">
                            <Link className="icon" to="/course/grid"><i className="fa fa-table"/></Link>
                            <Link className="icon" to="/course/table"><i className="fa fa-list"/></Link>
                            <a href="#" className="icon"><i className="fa fa-sort"/></a>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    courses.map(function(course, key) {
                        return <CourseRowContainer selectCourse={selectCourse} deleteCourse={deleteCourse} course={course} key={key}/>
                    })
                }
            </tbody>
        </table>
    </div>)
export default CourseTableComponent