import React from "react";
import "./course.style.css"
import CourseService from "../services/CourseService";
import LessonService from "../services/LessonService";
import ModuleListItemComponent from "../containers/ModuleListItemContainer";
import LessonComponent from "./LessonComponent";
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

    selectLesson = lesson =>
        this.setState({lesson: lesson})

    deleteLesson = async (id) => {
        await this.state.lessonService.deleteLesson(id)
        let allLessons = await this.state.lessonService.findLessonsForModule(this.state.module._id)
        console.log(allLessons)
        this.setState({
            lessons: allLessons
        })
    }

    titleChanged(event) {
        this.setState({lesson: {title: event.target.value}});
        console.log(event.target.value);
    }


    renderLessonTabs(){
            return this.state.module.lessons
                .map(lesson =>
                    <LessonComponent title={lesson.title} key={lesson._id}
                                     deleteLesson={this.deleteLesson}
                                     selectLesson={this.selectLesson}
                                     titleChanged={this.titleChanged}/>
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
        let allLessons = await this.state.lessonService.findLessonsForModule(this.state.moduleId)
        this.setState({
            lessons: allLessons
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


