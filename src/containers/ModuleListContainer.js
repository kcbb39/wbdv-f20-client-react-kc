import React from 'react'
import ModuleListItemComponent from './ModuleListItemContainer';
import CourseService from "../services/CourseService";
import ModuleService from "../services/ModuleService";

export default class ModuleListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: 'no id',
            module: '',
            modules: this.props.modules,
            course: this.props.course,
            courseService: new CourseService(),
            moduleService: new ModuleService()
        }
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }

    selectModule = module =>
        this.setState({module: module})

    deleteModule = async (id) => {
        console.log('HEERE')
        await this.state.moduleService.deleteModule(id)
        let allModules = await this.state.moduleService.findAllModulesForCourse(this.state.course._id)
        console.log(allModules)
        this.setState({
            modules: allModules
        })
    }

    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
        console.log(event.target.value);
    }

    createModule = () => {
        this.state.moduleService.createModule(this.props.course.id, {title: "new Module",
            lessons: []}).then((result) => {
                console.log(result)
                this.setState({id: result.data._id})
            }
        )
        console.log(this.state.module)
    }

    renderListOfModules() {
        return this.props.modules
            .map(module =>
                <ModuleListItemComponent title={module.title} key={module.id} deleteModule={this.deleteModule}
                selectModule={this.selectModule} module={module}/>
            )
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.renderListOfModules()}
                    <li className="btn btn-info"  onClick={() => this.createModule()}>
                        <i className="fa fa-plus icon"/>
                        New Module
                    </li>
                </ul>
            </div>
        )
    }
}
