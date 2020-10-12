import React from "react"
import "../course.style.css"

const HeadingWidgetComponent = () => (
            <div className="lessonEditor col-12">
                <div className="contentWidgets form-group row">
                    <div className="coll-11"><h4>Heading Widget</h4></div>
                    <div className="locationButtons">
                        <a href="#" className="btn btn-warning"><i className="fa fa-angle-up"/></a>
                        <a href="#" className="btn btn-warning"><i className="fa fa-angle-down"/></a>
                    </div>
                    <div className="col-auto">
                        <select className="custom-select mr-sm-2 " id="headingSelect">
                            <option selected>Heading</option>
                            <option value="1">Paragraph</option>
                            <option value="2">List</option>
                            <option value="2">Image</option>
                        </select>
                    </div>
                    <div>
                        <a href="#" className="btn btn-danger deleteWidget"><i className="fa fa-times-circle"/></a>
                    </div>
                </div>
                <div>
                    <div className="col-sm-9 widgetInputs">
                        <input type="text" placeholder="Heading" className="form-control" id="heading"/>
                    </div>
                </div>
                <div className="col-auto widgetInputs">
                    <select className="custom-select mr-sm-2 " id="otherHeadingSelect">
                        <option selected>Heading...</option>
                        <option value="1">Dropdown Select 1</option>
                        <option value="2">Dropdown Select 2</option>
                    </select>
                </div>
                <div>
                    <div className="col-sm-9 widgetInputs">
                        <input type="text" placeholder="Widget Name" className="form-control"
                               id="widgetName"/>
                    </div>
                </div>
                <div>
                    <h4>Preview</h4>
                </div>
                <div>
                    <h2>Heading Text</h2>
                </div>
            </div>
        )
export default HeadingWidgetComponent