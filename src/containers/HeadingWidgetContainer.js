import React from "react"
import "../components/course.style.css"

export default class HeadingWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            preview: this.props.preview,
            widget: this.props.widget,
            id: this.props.widget._id,
            headingSize: 1,
        }
    }


    render (){
        if(this.state.preview){
            if (this.state.headingSize == 1) {
                return (
                    <div className="lessonEditor col-12">
                        <div>
                            <h3>{this.state.widget.name}</h3>
                        </div>
                        <div>
                            <h4>Preview</h4>
                        </div>
                        <div>
                            <h1>{this.state.widget.text}</h1>
                        </div>
                    </div>)

            } else if (this.state.headingSize == 2){
                return (
                    <div className="lessonEditor col-12">
                        <div>
                            <h3>{this.state.widget.name}</h3>
                        </div>
                        <div>
                            <h4>Preview</h4>
                        </div>
                        <div>
                            <h2>{this.state.widget.text}</h2>
                        </div>
                    </div>)

            } else if (this.state.headingSize == 3) {
                return (
                    <div className="lessonEditor col-12">
                        <div>
                            <h3>{this.state.widget.name}</h3>
                        </div>
                        <div>
                            <h4>Preview</h4>
                        </div>
                        <div>
                            <h3>{this.state.widget.text}</h3>
                        </div>
                    </div>)
            }

        } else {
            if (this.state.headingSize == 1) {
                return (
                    <div className="lessonEditor col-12">
                        <div className="contentWidgets form-group row">
                            <div className="coll-11"><h4>Heading Widget</h4></div>
                            <div className="locationButtons">
                                <a href="#" className="btn btn-warning"><i className="fa fa-angle-up"/></a>
                                <a href="#" className="btn btn-warning"><i className="fa fa-angle-down"/></a>
                            </div>
                            <div className="col-auto">
                                <select className="custom-select mr-sm-2 ">
                                    <option value="0">Heading</option>
                                    <option value="1">Paragraph</option>
                                </select>
                            </div>
                            <div>
                                <a href="#" className="btn btn-danger deleteWidget"
                                   onClick={() => this.props.deleteWidget(this.state.widget.id)}><i className="fa fa-times-circle"/></a>
                            </div>
                        </div>
                        <div>
                            <div className="col-sm-9 widgetInputs">
                                <input type="text" value={this.state.widget.text} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-auto widgetInputs">
                            <select className="custom-select mr-sm-2 ">
                                <option value="0">Heading...</option>
                                <option value="1">Dropdown Select 1</option>
                                <option value="2">Dropdown Select 2</option>
                            </select>
                        </div>
                        <div>
                            <div className="col-sm-9 widgetInputs">
                                <input type="text" value={this.state.widget.name} className="form-control"
                                />
                            </div>
                        </div>
                        <div>
                            <h4>Preview</h4>
                        </div>
                        <div>
                            <h1>{this.state.widget.text}</h1>
                        </div>
                    </div>)

            } else if (this.state.headingSize == 2){
                return (
                    <div className="lessonEditor col-12">
                        <div className="contentWidgets form-group row">
                            <div className="coll-11"><h4>Heading Widget</h4></div>
                            <div className="locationButtons">
                                <a href="#" className="btn btn-warning"><i className="fa fa-angle-up"/></a>
                                <a href="#" className="btn btn-warning"><i className="fa fa-angle-down"/></a>
                            </div>
                            <div className="col-auto">
                                <select className="custom-select mr-sm-2 ">
                                    <option value="0">Heading</option>
                                    <option value="1">Paragraph</option>
                                </select>
                            </div>
                            <div>
                                <a href="#" className="btn btn-danger deleteWidget"
                                   onClick={() => this.props.deleteWidget(this.state.widget.id)}><i className="fa fa-times-circle"/></a>
                            </div>
                        </div>
                        <div>
                            <div className="col-sm-9 widgetInputs">
                                <input type="text" value={this.state.widget.text} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-auto widgetInputs">
                            <select className="custom-select mr-sm-2 ">
                                <option value="0">Heading...</option>
                                <option value="1">Dropdown Select 1</option>
                                <option value="2">Dropdown Select 2</option>
                            </select>
                        </div>
                        <div>
                            <div className="col-sm-9 widgetInputs">
                                <input type="text" value={this.state.widget.name} className="form-control"
                                />
                            </div>
                        </div>
                        <div>
                            <h4>Preview</h4>
                        </div>
                        <div>
                            <h2>{this.state.widget.text}</h2>
                        </div>
                    </div>)
            } else if (this.state.headingSize == 3){
                return (
                    <div className="lessonEditor col-12">
                        <div className="contentWidgets form-group row">
                            <div className="coll-11"><h4>Heading Widget</h4></div>
                            <div className="locationButtons">
                                <a href="#" className="btn btn-warning"><i className="fa fa-angle-up"/></a>
                                <a href="#" className="btn btn-warning"><i className="fa fa-angle-down"/></a>
                            </div>
                            <div className="col-auto">
                                <select className="custom-select mr-sm-2 ">
                                    <option value="0">Heading</option>
                                    <option value="1">Paragraph</option>
                                </select>
                            </div>
                            <div>
                                <a href="#" className="btn btn-danger deleteWidget"
                                   onClick={() => this.props.deleteWidget(this.state.widget.id)}><i className="fa fa-times-circle"/></a>
                            </div>
                        </div>
                        <div>
                            <div className="col-sm-9 widgetInputs">
                                <input type="text" value={this.state.widget.text} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-auto widgetInputs">
                            <select className="custom-select mr-sm-2 ">
                                <option value="0">Heading...</option>
                                <option value="1">Dropdown Select 1</option>
                                <option value="2">Dropdown Select 2</option>
                            </select>
                        </div>
                        <div>
                            <div className="col-sm-9 widgetInputs">
                                <input type="text" value={this.state.widget.name} className="form-control"
                                />
                            </div>
                        </div>
                        <div>
                            <h4>Preview</h4>
                        </div>
                        <div>
                            <h3>{this.state.widget.text}</h3>
                        </div>
                    </div>)
            }
        }
    }
}


