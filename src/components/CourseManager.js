import React from "react";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import axios from "axios";
import CourseEditor from "./CourseEditor";
import "../services/CourseService"
import CourseService from "../services/CourseService";


export default class CourseManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            selectedCourse: null,
            courses: [],
            courseService: new CourseService()
        }
    }
    selectCourse = course =>
        this.setState({selectedCourse: course})

    deleteCourse(id){
        this.state.courseService.deleteCourse(id).then(this.render())
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
                    <Link class="btn btn-secondary" to="/course/table">Table</Link>  |
                    <Link class="btn btn-secondary" to="/course/grid">Grid</Link>
                    <Route path="/course/table"
                           render={() => <CourseTable
                               selectCourse={this.selectCourse}
                               deleteCourse={this.deleteCourse}
                               courses={this.state.courses}/>}/>
                    <Route path="/course/grid"
                           render={() => <CourseGrid
                               selectCourse={this.selectCourse}
                               deleteCourse={this.deleteCourse()}
                               courses={this.state.courses}/>}/>
                    <Route path="/course/edit/:id"
                           render={() => <CourseEditor
                               course={this.state.selectedCourse}/>}/>
                </div>
            </Router>
        )
    }
}