import React from "react";
import { Image, Segment, Icon, Grid } from "semantic-ui-react";

const ListModelClass = (props) => {
    return(
        <>
            <div className="area_list_model_class p-4" style={{backgroundColor: "white"}}>
                <Segment compact secondary>
                    <div className="row justify-content-center">
                        <div className="col">
                            <Image src="https://i.udemycdn.com/course/240x135/1337000_0d99.jpg" fluid size="small" />
                        </div>
                        <div className="col">
                            <strong className="mt-3">Introduccion a la libreria ( React ) <br/> <br/><Icon name="clock" />5 minutos</strong>
                        </div>
                    </div>
                </Segment>
                <Segment compact>
                    <div className="row justify-content-center">
                        <div className="col">
                            <Image src="https://i.udemycdn.com/course/240x135/1337000_0d99.jpg" fluid size="small" />
                        </div>
                        <div className="col">
                            <strong className="mt-3">Introduccion a la libreria ( React ) <br/> <br/><Icon name="clock" />5 minutos</strong>
                        </div>
                    </div>
                </Segment>
                <Segment compact>
                    <div className="row justify-content-center">
                        <div className="col">
                            <Image src="https://i.udemycdn.com/course/240x135/1337000_0d99.jpg" fluid size="small" />
                        </div>
                        <div className="col">
                            <strong className="mt-3">Introduccion a la libreria ( React ) <br/> <br/><Icon name="clock" />5 minutos</strong>
                        </div>
                    </div>
                </Segment>
                <Segment compact>
                    <div className="row justify-content-center">
                        <div className="col">
                            <Image src="https://i.udemycdn.com/course/240x135/1337000_0d99.jpg" fluid size="small" />
                        </div>
                        <div className="col">
                            <strong className="mt-3">Introduccion a la libreria ( React ) <br/> <br/><Icon name="clock" />5 minutos</strong>
                        </div>
                    </div>
                </Segment>
            </div>
        </>
    );
}

export default ListModelClass;