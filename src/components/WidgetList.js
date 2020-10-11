import React from "react";
import HeadingWidget from "./Widgets/HeadingWidget";
import ImageWidget from "./Widgets/ImageWidget";
import ListWidget from "./Widgets/ListWidget";
import ParagraphWidget from "./Widgets/ListWidget";


export default class WidgetList extends React.Component {
    render() {
        return (
            <div>
                <HeadingWidget/>
                <ImageWidget/>
                <ListWidget/>
                <ParagraphWidget/>
            </div>
        )
    }
}