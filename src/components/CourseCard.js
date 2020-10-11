import React from 'react'
import {Link} from "react-router-dom";
import "./course.style.css"
import CourseService from "../services/CourseService";

export default class CourseCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            courseService: new CourseService()}
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.course.title}</h5>
                    <p className="card-text">Card text.</p>
                    <div>
                        <Link className="btn btn-primary"
                              to={`/course/edit/${this.props.course._id}`}
                              onClick={() => this.props.selectCourse(this.props.course)}>
                            More...
                        </Link>
                        <a onClick={() => this.props.deleteCourse(this.props.course._id)}>
                            <i className="fa fa-times icon"/>
                        </a>
                        <i className="fa fa-pencil icon"/>
                    </div>
                </div>
            </div>
        )
    }
}


//img needs alt attribute but idk what that is