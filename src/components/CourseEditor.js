import React from 'react'
import "font-awesome/css/font-awesome.css"
import ModuleList from "./ModuleList";
import "./course.style.css"
import LessonTabs from "./LessonTabs";
import WidgetList from "./WidgetList";
import TopicPills from "./TopicPills";

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selectedModule:
                this.props.course.modules[0]}

    }

    selectLesson = lesson =>
        this.setState({ selectedLesson: lesson,
            selectedTopic: lesson.topics[0]})

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
                                <a href="../index.js"><i className="fa fa-times-circle wbdv-close "/></a>
                            </li>
                            <li className="nav-item active">
                                <h3>{this.props.course.title}</h3>
                            </li>
                            <LessonTabs/>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-3">
                        <ModuleList modules=
                                        {this.props.course.modules}/></div>
                    <div className="Lessons col-8 d-flex">
                        <div className="col-12 wbdv-topic-pill-list">
                            <TopicPills/>
                            <div className="editorButtons col-8">
                                <a href="#" className="btn btn-success">Save</a>
                                <a href="#" className="btn btn-dark">Preview</a>
                            </div>
                            <WidgetList/>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="#" className="btn btn-success btn-lg btn-block deleteWidget"><i
                        className="fa fa-plus-square"/> Add Widget</a>
                </div>
            </div>
    )
    }
    }