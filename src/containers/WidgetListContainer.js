import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetContainer";
import ImageWidgetComponent from "../components/Widgets/ImageWidgetComponent";
import ListWidgetComponent from "../components/Widgets/ListWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetContainer";
import WidgetService from "../services/WidgetService";
import axios from "axios";
import ParagraphWidget from "./ParagraphWidgetContainer";
import HeadingWidget from "./HeadingWidgetContainer";


export default class WidgetListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            widgets: this.props.widgets,
            topicId: "123",
            widgetId: "",
            widget: {},
            text:"",
            preview: false
        }
        this.widgetService = new WidgetService()
    }


    getWidgets = async () => {
        let allWidgets = await this.widgetService.findWidgetsForTopic(this.state.topicId)
        this.setState({widgets: allWidgets})
    }

    deleteWidget = async (id) => {
        await this.widgetService.deleteWidget(id)
        await this.getWidgets()
    }

    updateWidget = async (widgetId, widget) => {
        await this.widgetService.updateWidget(widgetId, widget)
        await this.getWidgets()
    }

    createWidget = async (widget) => {
        console.log("DID THE THING")
        await this.widgetService.createWidget(this.state.topicId, widget)
        await this.getWidgets()
    }

    whichWidget(widget){
        if (widget.type=="heading"){
            return <HeadingWidget widget={widget} deleteWidget={this.deleteWidget} preview={this.state.preview}/>
        } else {
            return <ParagraphWidget widget={widget} deleteWidget={this.deleteWidget} preview={this.state.preview}/>
        }
    }

    renderWidgets() {
        return this.props.widgets.map((widget) => this.whichWidget(widget))
    }


    updateWidgets(){
        //To updtae the widgets, I would pull all of the variables form the input forms, create a widget from that data,
        //then use it to path to the server. There is a connection that I am not understanding between this file and
        // the specific widget components, in that I can't call a function from the component on itself from this file.
    }

    //in each of the components, I would implement two functions, moveUp() and moveDown()
    //Each one would be onClick of the respective up and down buttons. They would use updateWidget to
    //increase or decrease the widget order of the individual widget and its neighbors, then rerender the list of
    // widgets. This is connected to the above comment about the relation of this and the heading and paragraph
    //elements. 

    render() {
        return(
            <div>
                <div className="editorButtons col-8">
                    <a href="#" className="btn btn-success" onClick={() => this.updateWidgets()}>Save</a>
                    <a href="#" className="btn btn-dark" onClick={() => {
                        this.setState({preview: true})
                        this.render()
                    }}>Preview </a>
                </div>
                <div>
                    {this.renderWidgets()}
                </div>
                <div>
                    <a href="#" className="btn btn-success btn-lg btn-block deleteWidget" onClick={() => this.createWidget(
                    {
                                "name": "Widget 5",
                                "type": "heading",
                                "widgetOrder": 5,
                                "text": "Heading Text Ex",
                                "url": "bogus/url.com",
                                "size": 1,
                                "width": 1,
                                "height": 1,
                                "cssClass": "widgetClass",
                                "style": "cssStyle",
                                "value": "arbitrary",
                                "id": "1236"
                            }
                    )}><i
                        className="fa fa-plus-square"/> Add Widget</a>
                </div>
            </div>
        )
    }
}