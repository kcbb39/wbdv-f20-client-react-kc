import axios from 'axios'

export default class ModuleService {
    constructor() {
        this.url_course = "https://wbdv-generic-server.herokuapp.com/api/001299573/courses/"
        this.url_module = "https://wbdv-generic-server.herokuapp.com/api/001299573/modules/"
    }

    createModule(courseId, module){
        return axios.post(this.url_course + courseId + "/modules", module).then(resp => resp.data)
    }

    findAllModulesForCourse(courseId){
        return axios.get(this.url_course + courseId + "/modules").then(function(response){ return response.data})
    }

    findModule(moduleId){
        return axios.get(this.url_module + moduleId).then(function(response){return response.data})
    }

    updateModule(moduleId, module){
        return axios.put(this.url_module + moduleId, module).then(resp => resp.data)
    }

    deleteModule(moduleId){
        return axios.delete(this.url_module + moduleId).then(resp => resp.data)
    }
}