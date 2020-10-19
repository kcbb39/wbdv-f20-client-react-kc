import React from "react";
import "./course.style.css"
import TopicService from "../services/TopicService";
import TopicPill from "./TopicPill";
//const CourseCardContainer = ({course, selectCourse}) =>
export default class  TopicPillsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            lesson: this.props.lesson,
            lessonId: this.props.lessonId,
            topics: [],
            topicService: new TopicService(),
        }
    }

    renderTopics(){
        return this.state.lesson.topics.map(topic => <TopicPill title={topic} lesson={this.state.lesson}/>)
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                {this.renderTopics()}
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <a href="#">
                            New Topic
                            <i className="fa fa-plus icon"/>
                        </a>
                    </a>
                </li>
            </ul>
        )
    }
}
