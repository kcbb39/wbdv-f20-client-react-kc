import React from "react";
import "../course.style.css"


export default class ParagraphWidget extends React.Component {
    render() {
        return (
            <div className="lessonEditor col-12">
                <div className="contentWidgets form-group row">
                    <div className="coll-11"><h4>List Widget</h4></div>
                    <div className="locationButtons">
                        <a href="#" className="btn btn-warning"><i className="fa fa-angle-up"/></a>
                        <a href="#" className="btn btn-warning"><i className="fa fa-angle-down"/></a>
                    </div>
                    <div className="col-auto">
                        <select className="custom-select mr-sm-2 " id="listSelect">
                            <option value="1">Heading</option>
                            <option value="2">Paragraph</option>
                            <option value="3" selected>List</option>
                            <option value="4">Image</option>
                        </select>
                    </div>
                    <div>
                        <a href="#" className="btn btn-danger deleteWidget"><i className="fa fa-times-circle"/></a>
                    </div>
                </div>
                <div>
                    <div className="col-sm-9 widgetInputs">
                        <input type="text" placeholder="List" className="form-control" id="list"/>
                    </div>
                </div>
                <div className="col-auto widgetInputs">
                    <select className="custom-select mr-sm-2 " id="otherListSelect">
                        <option selected>List...</option>
                        <option value="1">Dropdown Select 1</option>
                        <option value="2">Dropdown Select 2</option>
                    </select>
                </div>
                <div>
                    <div className="col-sm-9 widgetInputs">
                        <input type="text" placeholder="Widget Name" className="form-control"
                               id="listWidgetName"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">List select</label>
                    <select multiple className="form-control" id="exampleFormControlSelect2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
        )
    }
}