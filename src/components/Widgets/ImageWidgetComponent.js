import React from 'react'
import {Link} from "react-router-dom";
import "../course.style.css"


const ImageWidgetComponent = () => (
            <div className="lessonEditor col-12">
                <div className="contentWidgets form-group row">
                    <div className="coll-11"><h4>Image Widget</h4></div>
                    <div className="locationButtons">
                        <a href="#" className="btn btn-warning"><i className="fa fa-angle-up"/></a>
                        <a href="#" className="btn btn-warning"><i className="fa fa-angle-down"/></a>
                    </div>
                    <div className="col-auto">
                        <select className="custom-select mr-sm-2 " id="imageSelect">
                            <option value="1">Heading</option>
                            <option value="2">Paragraph</option>
                            <option value="3">List</option>
                            <option value="4" selected>Image</option>
                        </select>
                    </div>
                    <div>
                        <a href="#" className="btn btn-danger deleteWidget"><i
                            className="fa fa-times-circle"/></a>
                    </div>
                </div>
                <div>
                    <div className="col-sm-9 widgetInputs">
                        <input type="text" placeholder="Image URL" className="form-control" id="image"/>
                    </div>
                </div>
                <div className="col-auto widgetInputs">
                    <select className="custom-select mr-sm-2 " id="otherImageSelect">
                        <option selected>Image...</option>
                        <option value="1">Dropdown Select 1</option>
                        <option value="2">Dropdown Select 2</option>
                    </select>
                </div>
                <div>
                    <div className="col-sm-9 widgetInputs">
                        <input type="text" placeholder="Widget Name" className="form-control"
                               id="imageWidgetName"/>
                    </div>
                </div>
                <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Image file input</label>
                            <input type="file" className="form-control-file"
                                   id="exampleFormControlFile1"/>
                        </div>
                    </form>
                </div>
                <div>
                    <div className="col-sm-9 widgetInputs">
                        <input type="text" placeholder="Image URL" className="form-control"
                               id="imageURL"/>
                    </div>
                </div>
            </div>
        )
export default ImageWidgetComponent
