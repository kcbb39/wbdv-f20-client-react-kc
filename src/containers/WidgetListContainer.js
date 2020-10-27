import React from "react";
import HeadingWidgetComponent from "../components/Widgets/HeadingWidgetComponent";
import ImageWidgetComponent from "../components/Widgets/ImageWidgetComponent";
import ListWidgetComponent from "../components/Widgets/ListWidgetComponent";
import ParagraphWidgetComponent from "../components/Widgets/ParagraphWidgetComponent";
import WidgetService from "../services/WidgetService";


export default class WidgetListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //widgets: this.props.widgets,
            widgets: [
                {
                    name:"Widget 1",
                    id:"123",
                    type:"heading",
                    widgetOrder:1,
                    text: "Heading Text Ex",
                    url: "bogus/url.com",
                    size: 1,
                    width:1,
                    height:1,
                    cssClass:"widgetClass",
                    style:"cssStyle",
                    value:"arbitrary"
                },
                {
                    name:"Widget 2",
                    id:"1234",
                    type:"paragraph",
                    widgetOrder:2,
                    text: "Paragraph Text Ex",
                    url: "bogus/url/2.com",
                    size: 1,
                    width:1,
                    height:1,
                    cssClass:"widgetClass",
                    style:"cssStyle",
                    value:"arbitrary"
                },
                {
                    name:"Widget 3",
                    id:"12345",
                    type:"paragraph",
                    widgetOrder:2,
                    text: "Paragraph Text Ex2",
                    url: "bogus/url/22.com",
                    size: 1,
                    width:1,
                    height:1,
                    cssClass:"widgetClass",
                    style:"cssStyle",
                    value:"arbitrary"
                }
            ],
            widgetService: new WidgetService(),
            topicId: "123",
            widgetId: "",
            widget: {},
            text:""
        }
    }
    

    deleteWidget = async (id) => {
        await this.state.widgetService.deleteWidget(id)
        let allWidgets = await this.state.widgetService.findWidgetsForTopic(this.state.topicId)
        this.setState({
            widgets: allWidgets
        })
    }

    updateWidget = async (widgetId, widget) => {
        await this.state.widgetService.updateWidget(widgetId, widget)
        let allWidets = await this.state.widgetService.findWidgetsForTopic(this.state.topicId)
        this.setState({
            widgets: allWidets
        })
    }

    titleChanged(event) {
        this.setState({text: {title: event.target.value}});
        console.log(event.target.value);
    }

    createWidget = async (widget) => {
        await this.state.widgetService.createWidget(this.state.topicId, widget)
        let allWidets = await this.state.widgetService.findWidgetsForTopic(this.state.topicId)
        this.setState({
            widgets: allWidets
        })
    }

    whichWidget(widget){
        if (widget.type=="heading"){
            return HeadingWidgetComponent(widget, this.deleteWidget())
        } else {
            return ParagraphWidgetComponent(widget, this.deleteWidget())
        }
    }

    renderWidgets() {
        console.log(this.state.widgets)
        return this.state.widgets.map((widget) => this.whichWidget(widget))
    }

    render() {
        return(
            <div>
                <div className="editorButtons col-8">
                    <a href="#" className="btn btn-success" onClick={this.updateWidget(this.state.widgetId, this.state.widget)}>Save</a>
                    <a href="#" className="btn btn-dark">Preview</a>
                </div>
                <ul>
                    {this.renderWidgets()}
                </ul>
                <div>
                    <a href="#" className="btn btn-success btn-lg btn-block deleteWidget"><i
                        className="fa fa-plus-square" onClick={() => this.createWidget({
                            name:"New Widget",
                            id:"12345",
                            type:"heading",
                            widgetOrder:1,
                            text: "",
                            url: "",
                            size: 1,
                            width:1,
                            height:1,
                            cssClass:"",
                            style:"",
                            value:""
                        }
                    )}/> Add Widget</a>
                </div>
            </div>
        )
    }
}