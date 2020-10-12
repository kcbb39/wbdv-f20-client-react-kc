import React from 'react'
import {Link} from "react-router-dom";
import "./course.style.css"
import CourseService from "../services/CourseService";

export default class CourseCardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            courseService: new CourseService()}
    }

    render() {
        if(this.state.editing){
            return (
                <div className="card">
                    <img className="card-img-top"
                         src="https://picsum.photos/300/200"/>
                    <div className="card-body">
                        <input type="text" placeholder={this.props.title} className="form-control" id="heading"/>
                        <i className="fa fa-plus-circle" onClick={function(){
                            this.state.editing = false
                            this.props.title = "WORKED BUT HOW"
                        }}/>
                        <div>
                            <Link className="btn btn-primary"
                                  to={`/course/edit/${this.props.course._id}`}
                                  onClick={() => this.props.selectCourse(this.props.course)}>
                                More...
                            </Link>
                            <a onClick={() => this.props.deleteCourse(this.props.course._id)}>
                                <i className="fa fa-times icon"/>
                            </a>
                            <i className="fa fa-pencil icon" onClick={() => {this.setState({editing: !this.state.editing})}}/>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="card">
                    <img className="card-img-top"
                         src="https://picsum.photos/300/200"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.course.title}</h5>
                        <div>
                            <Link className="btn btn-primary"
                                  to={`/course/edit/${this.props.course._id}`}
                                  onClick={() => this.props.selectCourse(this.props.course)}>
                                More...
                            </Link>
                            <a onClick={() => this.props.deleteCourse(this.props.course._id)}>
                                <i className="fa fa-times icon"/>
                            </a>
                            <i className="fa fa-pencil icon" onClick={() => this.setState({editing: true})}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}


//img needs alt attribute but idk what that is