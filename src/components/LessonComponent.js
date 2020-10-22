import React from 'react'
import "font-awesome/css/font-awesome.css"
import "./course.style.css"

export default class LessonComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            title: this.props.title,
            lesson: null,
        }
    }

    render() {
        if (this.state.editing) {
            return (
                <li className="nav-item">
                    <input type="text" placeholder={this.props.title} className="form-control" id="heading"
                           onChange={(event) => this.props.titleChanged(event)}/>
                    <i className="fa fa-plus-circle" onClick={() => {
                        this.state.editing = false
                        this.props.updateLesson(this.state.id, this.state.title)
                    }}/>
                    <i className="fa fa-pencil icon" onClick={() => {
                        this.setState({editing: false})
                    }}/>
                </li>
            )
        } else {
            return (
                <li className="nav-item">
                    <a className="nav-link">
                        <i className="fa fa-times icon" onClick={(event) => {
                            this.props.selectLesson(event)
                            this.props.deleteLesson(this.state.lesson._id)
                        }}/>
                        {this.props.title}
                        <i className="fa fa-pencil icon" onClick={() => {
                            this.setState({editing: true})
                        }}/>
                    </a>
                </li>
            )
        }
    }
}