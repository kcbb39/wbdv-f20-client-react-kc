import React from 'react'
import "font-awesome/css/font-awesome.css"
import "./course.style.css"

export default class TopicComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            title: this.props.title,
            selectedTopic: null,
            lesson: this.props.lesson,
            lessonId: this.props.lesson.id
        }
    }

    render() {
        if (this.state.editing) {
            return (
                <li className="nav-item">
                    <input type="text" placeholder={this.props.title} className="form-control" id="heading"
                           onChanged={(event) => this.props.titleChanged(event)}/>
                    <i className="fa fa-plus-circle" onClick={() => {
                        this.state.editing = false
                        this.props.updateTopic(this.state.lessonId, this.state.title)
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
                        <i className="fa fa-times icon" onClick={() => {
                            this.props.selectTopic()
                            this.props.deleteTopic(this.selectedTopic.id)
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