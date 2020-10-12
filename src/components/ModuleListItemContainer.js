import React from 'react'
import "font-awesome/css/font-awesome.css"
import "./course.style.css"

export default class ModuleListItem extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                <i className="fa fa-times-circle icon"/>
                {this.props.title}
                <i className="fa fa-pencil icon"/>
            </li>
        );
    }
}