import React from "react";
import "./course.style.css"
import TopicService from "../services/TopicService";
import TopicComponent from "./TopicComponent";
import ModuleListItemComponent from "../containers/ModuleListItemContainer";
//const CourseCardContainer = ({course, selectCourse}) =>
export default class  TopicPillsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            lesson: this.props.lesson,
            lessonId: this.props.lessonId,
            topics: [],
            topicService: new TopicService(),
        }
    }

    selectTopic = topic =>
        this.setState({topic: topic})

    deleteTopic = async (id) => {
        console.log('HEERE')
        await this.state.topicService.deleteTopic(id)
        let allTopics = await this.state.topicService.findTopicsForLesson(this.state.lesson._id)
        console.log(allTopics)
        this.setState({
            topics: allTopics
        })
    }

    titleChanged(event) {
        this.setState({topic: {title: event.target.value}});
        console.log(event.target.value);
    }

    createTopic = () => {
        this.state.topicService.createTopic(this.props.lesson.id, {title: "new Topic",
            }).then((result) => {
                console.log(result)
                this.setState({id: result.data._id})
            }
        )
    }


    renderTopics(){
        return this.state.lesson.topics.map(topic => <TopicComponent title={topic} lesson={this.state.lesson}
                                                                     deleteTopic={this.deleteTopic}
                                                                     createTopic={this.createTopic}
                                                                     titleChanged={this.titleChanged}/>)
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                {this.renderTopics()}
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <a href="#">
                            New Topic
                            <i className="fa fa-plus icon" onClick={(event) => this.createTopic(this.state.lessonId, "New Topic")}/>
                        </a>
                    </a>
                </li>
            </ul>
        )
    }
}
