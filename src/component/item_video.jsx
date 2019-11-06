import React from "react";
import { Tab } from "semantic-ui-react";
import Video from "../assets/static/prueba.mp4";
import {  } from "semantic-ui-react";

const panes = [
    { menuItem: 'Descripcion', render: () => <Tab.Pane>jQuery is a DOM manipulation library. It reads from and writes to the DOM. React uses a virtual DOM (a JavaScript representation of the real DOM). React only writes patch updates to the DOM, but never reads from it.</Tab.Pane> },
    { menuItem: 'Preguntas', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Enlaces', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
];

const VideoItem = (props) => {
    return(
        <>
            <section id="area_item_video">
            <iframe width="" height="" src="https://drive.google.com/file/d/1GonxwNX3sXvqK5BjmvpCTjczMNshsSOm/preview" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="mt-4">
                    <Tab panes={panes} defaultActiveIndex={2} />
                </div>
            </section>
        </>
    );
}

export default VideoItem;