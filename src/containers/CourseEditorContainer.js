import React from 'react'
import "font-awesome/css/font-awesome.css"
import ModuleListContainer from "./ModuleListContainer";
import "../components/course.style.css"
import LessonTabsComponent from "../components/LessonTabsComponent";
import WidgetListComponent from "../components/WidgetListComponent";
import TopicPillsComponent from "../components/TopicPillsComponent";

export default class CourseEditorContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            course: this.props.course,
            selectedModule: this.props.course.modules[0],
            selectedLesson: this.props.course.modules[0].lessons[0]
        }

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
                        course={this.state.course}/></div>
                    <div className="Lessons col-8 d-flex">
                        <div className="col-12 wbdv-topic-pill-list">
                            <LessonTabsComponent module={this.state.selectedModule} moduleId={this.state.selectedModule.id} key={this.state.selectedModule.id}/>
                            <TopicPillsComponent lesson={this.state.selectedLesson} lessonId={this.state.selectedLesson.id} key={this.state.selectedLesson.id}/>
                            <div className="editorButtons col-8">
                                <a href="#" className="btn btn-success">Save</a>
                                <a href="#" className="btn btn-dark">Preview</a>
                            </div>
                            <WidgetListComponent/>
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