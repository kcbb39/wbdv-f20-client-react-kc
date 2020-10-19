import React from "react";
import "./course.style.css"
import CourseService from "../services/CourseService";
import LessonService from "../services/LessonService";
import ModuleListItemComponent from "../containers/ModuleListItemContainer";
import LessonTab from "./LessonTab";
//const CourseCardContainer = ({course, selectCourse}) =>
export default  class LessonTabsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'New Lesson',
            module: this.props.module,
            moduleId: this.props.moduleId,
            lessons:[],
            lessonService: new LessonService()
        }
    }



    renderLessonTabs(){
            return this.state.module.lessons
                .map(lesson =>
                    <LessonTab title={lesson.title} key={lesson.id}/>
                )
    }

    async createLesson(title) {
        await this.state.lessonService.createLesson(this.state.moduleId, {title: title, topics: [
                {
                    "title": "TOPIC",
                    "id": 123
                },
                {
                    "title": "TOPIC2",
                    "id": 234
                }
            ]})
        let allCourses = await this.state.lessonService.findLessonsForModule(this.state.moduleId)
        this.setState({
            courses: allCourses
        })
    }

    render(){
        return (
            <ul className="nav nav-tabs">
                {this.renderLessonTabs()}
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <a href="#">
                            New Lesson
                            <i className="fa fa-plus icon" onClick={() => {
                                this.createLesson(this.state.moduleId, "New Lesson")
                            }}/>
                        </a>
                    </a>
                </li>
            </ul>
        )
    }



}


