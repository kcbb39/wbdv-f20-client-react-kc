import React from "react";
import "../course.style.css"


const ParagraphWidgetComponent = (widget, deleteWidget, titleChanged) => (
            <div className="lessonEditor col-12">
                <div className="contentWidgets form-group row">
                    <div className="coll-11"><h4>Paragraph Widget</h4></div>
                    <div className="locationButtons">
                        <a href="#" className="btn btn-warning"><i className="fa fa-angle-up"/></a>
                        <a href="#" className="btn btn-warning"><i className="fa fa-angle-down"/></a>
                    </div>
                    <div className="col-auto">
                        <select className="custom-select mr-sm-2 " id="paragraphSelect">
                            <option value="1">Heading</option>
                            <option value="2" selected>Paragraph</option>
                            <option value="3">List</option>
                            <option value="4">Image</option>
                        </select>
                    </div>
                    <div>
                        <a href="#" className="btn btn-danger deleteWidget" onClick={() => deleteWidget}><i className="fa fa-times-circle"/></a>
                    </div>
                </div>
                <div>
                    <div className="col-sm-9 widgetInputs">
                        <input type="text" placeholder={widget.text} className="form-control"
                               id="paragraph"/>
                    </div>
                </div>
                <div className="col-auto widgetInputs">
                    <select className="custom-select mr-sm-2 " id="otherParagraphSelect">
                        <option selected>Paragraph...</option>
                        <option value="1">Dropdown Select 1</option>
                        <option value="2">Dropdown Select 2</option>
                    </select>
                </div>
                <div>
                    <div className="col-sm-9 widgetInputs">
                        <input type="text" placeholder={widget.name} className="form-control"
                               id="paragraphWidgetName"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Paragraph:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1"
                              placeholder={widget.text} rows="3"/>
                </div>
            </div>
)
export default ParagraphWidgetComponent