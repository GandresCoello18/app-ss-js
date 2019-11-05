import React from "react";
import { Helmet } from 'react-helmet';
import { Menu, Input, Image, Popup, Icon } from 'semantic-ui-react';
import "../assets/styles/components/header.scss";

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
                        <nav className="col-12">
                            <Menu inverted pointing fluid stackable>
                                <Menu.Item>
                                    <img src='https://react.semantic-ui.com/logo.png' />
                                </Menu.Item>
                                <Menu.Item>
                                    <Input className='icon' icon='search' placeholder='Buscando...' />
                                </Menu.Item>
                                <Menu.Item
                                    name='Inicio'
                                    active={activeItem === 'Inicio'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name='Clases'
                                    active={activeItem === 'Clases'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name='Tareas'
                                    active={activeItem === 'Tareas'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name='Desafios'
                                    active={activeItem === 'Desafios'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name='Opciones'
                                    active={activeItem === 'Opciones'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item 
                                    name="notificacion"
                                    active={activeItem === 'notificacion'}
                                    onClick={this.handleItemClick}
                                >
                                    <Icon name="bell" />
                                </Menu.Item>
                                <Menu.Item
                                    position='right'
                                    name='User'
                                    active={activeItem === 'User'}
                                    onClick={this.handleItemClick}
                                >
                                    <Popup
                                        content="Elliot has been a member since July 2012"
                                        key="Elliot Fu"
                                        header="Elliot Fu"
                                        trigger={<Image src="https://react.semantic-ui.com/logo.png" avatar />}
                                        /> Andres Coello
                                </Menu.Item>
                            </Menu>
                        </nav>
                    </div>
                </header>  
            </>
        );
    }
}

export default Header;