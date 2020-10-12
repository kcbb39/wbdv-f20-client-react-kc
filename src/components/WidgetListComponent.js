import React from "react";
import HeadingWidgetComponent from "./Widgets/HeadingWidgetComponent";
import ImageWidgetComponent from "./Widgets/ImageWidgetComponent";
import ListWidgetComponent from "./Widgets/ListWidgetComponent";
import ParagraphWidgetComponent from "./Widgets/ParagraphWidgetComponent";


const WidgetListComponent = () => (
            <div>
                <HeadingWidgetComponent/>
                <ImageWidgetComponent/>
                <ListWidgetComponent/>
                <ParagraphWidgetComponent/>
            </div>
        )
export default WidgetListComponent