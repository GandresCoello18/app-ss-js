import React from "react";
import { Card, Feed } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Preguntale = (props) => {
    return(
        <>
            <Card>
                <Card.Content>
                <Card.Header className="text-center">Preguntale</Card.Header>
                </Card.Content>
                <Card.Content>
                <Feed>
                    <Feed.Event style={{cursor: "pointer"}}>
                        <Feed.Label image='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                        <Link to="/mensaje-directo">
                            <Feed.Content>
                                <Feed.Summary className="mt-2 ml-1 text-dark">
                                    Andres coello
                                </Feed.Summary>
                            </Feed.Content>
                        </Link>    
                    </Feed.Event>

                    <Feed.Event style={{cursor: "pointer"}}>
                        <Feed.Label image='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                        <Link to="/mensaje-directo">
                            <Feed.Content>
                                <Feed.Summary className="mt-2 ml-1 text-dark">
                                    Andres coello
                                </Feed.Summary>
                            </Feed.Content>
                        </Link>    
                    </Feed.Event>

                    <Feed.Event style={{cursor: "pointer"}}>
                        <Feed.Label image='https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg' />
                        <Link to="/mensaje-directo">
                            <Feed.Content>
                                <Feed.Summary className="mt-2 ml-1 text-dark">
                                    Andres coello
                                </Feed.Summary>
                            </Feed.Content>
                        </Link>    
                    </Feed.Event>
                </Feed>
                </Card.Content>
            </Card>
        </>
    );
}

export default Preguntale;