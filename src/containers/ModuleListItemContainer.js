import React from 'react'
import "font-awesome/css/font-awesome.css"
import "../components/course.style.css"

export default class ModuleListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            editing: false,
            title: '',
            selectedModule: null,
        }
    }
    render() {
        if(this.state.editing){
            return (
                <li className="list-group-item">
                    <input type="text" placeholder={this.props.title} className="form-control" id="heading" onChanged={(event)=> this.props.titleChanged(event)}/>
                    <i className="fa fa-plus-circle" onClick={() => {
                        this.state.editing = false
                        this.props.updateModule(this.state.selectedModule.id, this.state.title)
                    }}/>
                    <i className="fa fa-pencil icon" onClick={() => {this.setState({editing: false})}}/>
                </li>
            )
        }
        else {
            return (
                <li className="list-group-item">
                    <a onClick={() => this.props.deleteModule(this.state.selectedModule.id)}>
                        <i className="fa fa-times icon"/>
                    </a>
                    {this.props.title}
                    <i className="fa fa-pencil icon" onClick={() => {this.setState({editing: true})}}/>
                </li>
            )
        }
    }
}