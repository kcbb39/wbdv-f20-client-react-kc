import React from 'react'
import "font-awesome/css/font-awesome.css"
import ModuleListContainer from "./ModuleListContainer";
import "../components/course.style.css"
import LessonTabsComponent from "../components/LessonTabsComponent";
import WidgetListContainer from "./WidgetListContainer";
import TopicPillsComponent from "../components/TopicPillsComponent";
import WidgetService from "../services/WidgetService";
import axios from "axios";

export default class CourseEditorContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            course: this.props.course,
            selectedModule: this.props.course.modules[0],
            selectedLesson: this.props.course.modules[0].lessons[0],
            widgets: []
        }

    }

    componentDidMount() {
        axios.get("https://sleepy-mesa-95547.herokuapp.com/api/topics/321/widgets")
            .then((response) => {
                this.setState({
                    isLoaded: true,
                    widgets: response.data})})

    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li>
                                <a href="/"><i className="fa fa-times-circle wbdv-close icon"/></a>
                            </li>
                            <li className="nav-item active">
                                <h3>{this.props.course.title}</h3>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-3">
                        <ModuleListContainer modules={this.props.course.modules}
                        course={this.props.course}/>
                    </div>
                    <div className="Lessons col-8 d-flex">
                        <div className="col-12 wbdv-topic-pill-list">
                            <LessonTabsComponent module={this.state.selectedModule} moduleId={this.state.selectedModule.id} key={this.state.selectedModule.id}/>
                            <TopicPillsComponent lesson={this.state.selectedLesson} lessonId={this.state.selectedLesson.id} key={this.state.selectedLesson.id}/>
                            <WidgetListContainer widgets={this.state.widgets}/>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
    }