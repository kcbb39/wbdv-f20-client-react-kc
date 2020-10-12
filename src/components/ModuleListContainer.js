import React from 'react'
import ModuleListItemComponent from './ModuleListItemContainer';
import CourseService from "../services/CourseService";

export default class ModuleListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: 'no id',
            module: '',
            courseService: new CourseService()
        }
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }

    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
        console.log(event.target.value);
    }

    createModule() {
        this.state.courseService.createCourse({title: this.state.module.title,
            modules: this.state.modules}).then(result => {
                console.log(result)
                this.setState({_id: result.data._id})
            }
        )
        console.log(this.state.module)
    }

    renderListOfModules() {
        return this.props.modules
            .map(module =>
                <ModuleListItemComponent title={module.title} key={module.id}/>
            )
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        )
    }
}
