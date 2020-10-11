import React from "react";
//const CourseCard = ({course, selectCourse}) =>
export default class TopicPills extends React.Component {

    render() {
        return (
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
        );
    }
}