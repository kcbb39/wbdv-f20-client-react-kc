import React from 'react'
import "font-awesome/css/font-awesome.css"
import ModuleList from "./ModuleList";
import ImageWidget from "./Widgets/ImageWidget";
import ParagraphWidget from "./Widgets/ListWidget";
import ListWidget from "./Widgets/ListWidget";
import HeadingWidget from "./Widgets/HeadingWidget";
import "./course.style.css"

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
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
                                <a href="../index.js"><i className="fa fa-times-circle wbdv-close "/></a>
                            </li>
                            <li className="nav-item active">
                                <h3>{this.props.course.title}</h3>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wbdv-lesson-tabs" href="#">Build</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wbdv-lesson-tabs" href="#">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wbdv-lesson-tabs" href="#">Theme</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wbdv-lesson-tabs" href="#">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wbdv-lesson-tabs" href="#">Apps</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wbdv-lesson-tabs" href="#">Settings</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="wbdv-lesson-add-btn"><i className="fa fa-plus"/></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-3">
                        <ModuleList modules=
                                        {this.props.course.modules}/></div>
                    <div className="Lessons col-8 d-flex">
                        <div className="col-12 wbdv-topic-pill-list">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link active wbdv-topic-pill" href="#">Topic 1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active wbdv-topic-pill" href="#">Topic 2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active wbdv-topic-pill" href="#">Topic 3</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link wbdv-topic-add-btn" href="#"><i className="fa fa-plus-square"/> Add Topic</a>
                                </li>
                            </ul>
                            <div className="editorButtons col-8">
                                <a href="#" className="btn btn-success">Save</a>
                                <a href="#" className="btn btn-dark">Preview</a>
                            </div>
                            <HeadingWidget/>
                            <ParagraphWidget/>
                            <ListWidget/>
                            <ImageWidget/>
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