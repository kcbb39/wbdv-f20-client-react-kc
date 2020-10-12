import React from "react";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import axios from "axios";
import CourseEditorContainer from "./CourseEditorContainer";
import "../services/CourseService"
import CourseService from "../services/CourseService";


export default class CourseManagerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            selectedCourse: null,
            courses: [],
            courseService: new CourseService(),
            title: ""
        }
    }
    selectCourse = course =>
        this.setState({selectedCourse: course})

    deleteCourse = async (id) => {
        await this.state.courseService.deleteCourse(id)
        let allCourses = await this.state.courseService.findAllCourses()
        this.setState({
            courses: allCourses
        })
    }

    titleChanged(event) {
        this.setState({title: event.target.value});
        console.log(this.state.title);
    }

    async createCourse(title) {
        await this.state.courseService.createCourse({title: title, modules: [
                {
                    "title": "Module 1 - jQuery",
                    "id": 123
                },
                {
                    "title": "Module 2 - React",
                    "id": 234
                }
            ]})
        let allCourses = await this.state.courseService.findAllCourses()
        this.setState({
            courses: allCourses
        })
    }

    async updateCourse(title){
        await this.state.courseService.updateCourse({title: title})
        let allCourses = await this.state.courseService.findAllCourses()
        this.setState({
            courses: allCourses
        })
    }

    componentDidMount() {
        axios.get('https://wbdv-generic-server.herokuapp.com/api/001299573/courses')
            .then(
                (result) => {
                    //console.log(result)
                    this.setState({
                        isLoaded: true,
                        courses: result.data,
                        selectedCourse: result.data[0]
                    })
                })
    }

    render() {
        return (
            <Router>
                <div>
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
                                       placeholder="New Course Title" aria-label="New Course Title" onChange={(event) => {this.titleChanged(event)}}/>
                                <button className="btn btn-outline-success my-2 my-sm-0 wbdv-button wbdv-add-course"
                                        type="submit" onClick={() => {
                                            this.createCourse(this.state.title)
                                            }}>Add
                                </button>
                            </form>
                        </div>
                    </nav>
                   <Route exact path="/">
                       <Redirect to="/course/table"/>
                   </Route>
                    <Route path="/course/table"
                           render={() => <CourseTableComponent
                               selectCourse={this.selectCourse}
                               deleteCourse={this.deleteCourse}
                               updateCourse={this.updateCourse}
                               courses={this.state.courses}/>}/>
                    <Route path="/course/grid"
                           render={() => <CourseGridComponent
                               selectCourse={this.selectCourse}
                               deleteCourse={this.deleteCourse}
                               updateCourse={this.updateCourse}
                               courses={this.state.courses}/>}/>
                    <Route path="/course/edit/:id"
                           render={() => <CourseEditorContainer
                               course={this.state.selectedCourse}/>}/>
                </div>
            </Router>
        )
    }
}

/*
*  <Link class="btn btn-secondary" to="/course/table">Table</Link>  |
                    <Link class="btn btn-secondary" to="/course/grid">Grid</Link>
* */