import axios from 'axios'

export default class WidgetService {
    constructor() {
        this.url = "https://sleepy-mesa-95547.herokuapp.com/api"
    }

    createWidget(tid, widget){
        return axios.post(this.url + "/topics/" + tid + "/widgets", widget).then(resp => resp.data)
    }

    findWidgetsForTopic(tid){
        return axios.get(this.url + "/topics/" + tid + "/widgets").then(function(response){ return response.data})
    }

    findAllWidgets(){
        return axios.get(this.url + "/widgets").then(function(response){return response.data})
    }

    findWidgetById(widgetId){
        return axios.get(this.url + "/widgets/" + widgetId).then(function(response){return response.data})
    }

    updateWidget(widgetId, widget){
        return axios.put(this.url + "/widgets/" + widgetId, widget).then(resp => resp.data)
    }

    deleteWidget(widgetId){
        return axios.delete(this.url + "/widgets/" + widgetId).then(resp => resp.data)
    }
}