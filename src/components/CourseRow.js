//delete edit and save
import React from 'react'
import {Link} from "react-router-dom";
import "font-awesome/css/font-awesome.css"
import "./course.style.css"
import CourseService from "../services/CourseService";


export default  class CourseRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {course: this.props.course,
                      courseService: new CourseService()}
        this.deleteCourse = this.deleteCourse.bind(this)
    }

    deleteCourse(id) {
        this.state.courseService.deleteCourse(id).then(result => {
            console.log(result)
            this.setState({course: null})
        })
    }

    render() {
        return (
            <tr>
                <td>
                    <div>
                        <a href="#" className="icon"><i className="fa fa-file"/></a>

                        <Link to={`/course/edit/${this.props.course._id}`} onClick={() => this.props.selectCourse(this.props.course)}>
                            {this.props.course.title}
                        </Link>
                    </div>
                </td>
                <td>
                    <h6 className="wbdv-row wbdv-owner">Me</h6>
                </td>
                <td>
                    <Link to={`/course/delete/${this.props.course._id}`} onClick={() => this.props.deleteCourse(this.props.course._id)}>
                        <i className="fa fa-times"/>
                    </Link>
                </td>
            </tr>
        )
    }
}
