import React from "react";
//const CourseCardContainer = ({course, selectCourse}) =>
const TopicPillsComponent = () => (
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="btn btn-info wbdv-topic-pill" href="#">Topic 1</a>
                </li>
                <li className="nav-item">
                    <a className="btn btn-info wbdv-topic-pill" href="#">Topic 2</a>
                </li>
                <li className="nav-item">
                    <a className="btn btn-info wbdv-topic-pill" href="#">Topic 3</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link wbdv-topic-add-btn" href="#"><i className="fa fa-plus-square"/> Add Topic</a>
                </li>
            </ul>
        )
export default TopicPillsComponent