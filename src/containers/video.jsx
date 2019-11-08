import React from "react";
import ListItemClass from "../component/list_item_clases";
import Preguntale from "../component/preguntale_ah";
import ComentarioVideo from "../component/comentarios_video_item";
import ItemVideo from "../component/item_video";
import BarraSuperior from '../component/barra_superior';

const Video = (props) => {
    const { id } = props.match.params;
    console.log(id);
    return(
        <>
            <div className="container-fluid mt-4">
                <div className="row justify-content-between">
                    <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                        <div className="row">
                            <div className="col-12">
                                <ListItemClass />
                            </div>
                            <div className="col-12 mt-4">
                                <Preguntale />
                            </div> 
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-7 scroll_medio mt-3 mt-md-0">
                        <BarraSuperior />

                        <div className="row mt-4">
                            <div className="col-12">
                                <ItemVideo />
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-3 scroll_medio mt-4 mt-md-0">
                        <ComentarioVideo />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Video;