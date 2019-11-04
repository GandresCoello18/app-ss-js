import React from "react";
import { Helmet } from 'react-helmet';
import { Menu, Grid } from 'semantic-ui-react';

class Header extends React.Component{
    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    
    render(){
        const { activeItem } = this.state;
        return(
            <>
                <Helmet>
                    <title>Social Students</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Helmet>
                
                <header className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Menu inverted fluid>
                                <Menu.Item>
                                    <img src='' />
                                </Menu.Item>
                                <Menu.Item
                                    name='home'
                                    active={activeItem === 'home'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name='messages'
                                    active={activeItem === 'messages'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name='friends'
                                    active={activeItem === 'friends'}
                                    onClick={this.handleItemClick}
                                />
                            </Menu>
                        </div>
                    </div>
                </header>  
            </>
        );
    }
}

export default Header;