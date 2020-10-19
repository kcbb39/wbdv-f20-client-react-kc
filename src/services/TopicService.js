import axios from 'axios'

export default class TopicService {
    constructor() {
        this.url_lesson = "https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/lessons/"
        this.url_topic = "https://wbdv-generic-server.herokuapp.com/api/001299573/topics/"
    }

    createTopic(lessonId, topic){
        return axios.post(this.url_lesson + lessonId + "/topics", topic).then(resp => resp.data)
    }

    findTopicsForLesson(lessonId){
        return axios.get(this.url_lesson + lessonId + "/topics").then(function(response){ return response.data})
    }

    findTopic(topicId){
        return axios.get(this.url_topic + topicId).then(function(response){return response.data})
    }

    updateTopic(topicId, topic){
        return axios.put(this.url_topic + topicId, topic).then(resp => resp.data)
    }

    deleteTopic(topicId){
        return axios.delete(this.url_topic + topicId).then(resp => resp.data)
    }
}