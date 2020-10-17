import axios from 'axios'

export default class LessonService {
    constructor(moduleId) {
        this.url = "https://wbdv-generic-server.herokuapp.com/api/001299573/modules/" + moduleId + "/"
    }

    createLesson(course){
        return axios.post(this.url, course).then(resp => resp.data)
    }

    findAllLessons(){
        return axios.get(this.url).then(function(response){ return response.data})
    }

    findLessonById(id){
        return axios.get(this.url + id).then(function(response){return response.data})
    }

    updateLesson(id, course){
        return axios.put(this.url + id, course).then(resp => resp.data)
    }

    deleteLesson(id){
        return axios.delete(this.url + id).then(resp => resp.data)
    }
}