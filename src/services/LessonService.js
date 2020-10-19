import axios from 'axios'

export default class LessonService {
    constructor(moduleId) {
        this.url_module = "https://wbdv-generic-server.herokuapp.com/api/001299573/modules/"
        this.url_lesson = "https://wbdv-generic-server.herokuapp.com/api/001299573/lessons/"
    }

    createLesson(moduleId, lesson){
        return axios.post(this.url_module + moduleId + "/lessons", lesson).then(resp => resp.data)
    }

    findLessonsForModule(moduleId){
        return axios.get(this.url_module + moduleId + "/lessons").then(function(response){ return response.data})
    }

    findLesson(lessonId){
        return axios.get(this.url_lesson + lessonId).then(function(response){return response.data})
    }

    updateLesson(lessonId, lesson){
        return axios.put(this.url_lesson + lessonId, lesson).then(resp => resp.data)
    }

    deleteLesson(lessonId){
        return axios.delete(this.url_lesson + lessonId).then(resp => resp.data)
    }
}