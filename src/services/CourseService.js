import axios from 'axios'

export default class CourseService {
    constructor() {
        this.url = "https://wbdv-generic-server.herokuapp.com/api/001299573/courses"
    }

    createCourse(course){
        return axios.post(this.url, course).then(resp => resp.data)
    }

    findAllCourses(){
        return axios.get(this.url).then(function(response){ return response.data})
    }

    findCourseById(id){
        return axios.get(this.url + "/" + id).then(function(response){return response.data})
    }

    updateCourse(id, course){
        return axios.put(this.url + "/" + id, course).then(resp => resp.data)
    }

    deleteCourse(id){
        return axios.delete(this.url + "/" + id).then(resp => resp.data)
    }
}