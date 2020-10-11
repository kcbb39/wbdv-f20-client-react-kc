//delete edit and save
import React from 'react'
import {Link} from "react-router-dom";
import "font-awesome/css/font-awesome.css"
import "./course.style.css"
import CourseService from "../services/CourseService";


export default  class CourseRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                      editing: false,
                      courseService: new CourseService()}
    }

    render() {
        if(this.state.editing){
            return (
                <tr>
                    <td>
                        <div>
                            <a href="#" className="icon"><i className="fa fa-file"/></a>
                            <input type="text" placeholder={this.props.title} className="form-control" id="heading"/>
                            <i className="fa fa-plus-circle" onClick={function(){
                                this.state.editing = false
                                this.props.title = "WORKED BUT HOW"
                            }}/>
                        </div>
                    </td>
                    <td>
                        <h6 className="wbdv-row wbdv-owner">Me</h6>
                    </td>
                    <td>
                        <a onClick={() => this.props.deleteCourse(this.props.course._id)}>
                            <i className="fa fa-times icon"/>
                        </a>
                    </td>
                    <td>
                        <i className="fa fa-pencil icon" onClick={() => {this.setState({editing: !this.state.editing})}}/>
                    </td>
                </tr>
            )
        }
        else{
            return (
                <tr>
                    <td>
                        <div>
                            <Link to={`/course/edit/${this.props.course._id}`} onClick={() => this.props.selectCourse(this.props.course)}>
                                <i className="fa fa-file icon"/>
                                {this.props.course.title}
                            </Link>
                        </div>
                    </td>
                    <td>
                        <h6 className="wbdv-row wbdv-owner">Me</h6>
                    </td>
                    <td>
                        <a onClick={() => this.props.deleteCourse(this.props.course._id)}>
                            <i className="fa fa-times icon"/>
                        </a>
                        <i className="fa fa-pencil icon" onClick={() => this.setState({editing: true})}/>
                    </td>
                </tr>
            )
        }
    }
}
