import React from "react";
import { Helmet } from 'react-helmet';
import { Menu, Input, Image, Popup, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import "../assets/styles/components/header.scss";

class Header extends React.Component{
    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    open = () => {
        var menu = document.querySelectorAll('.responsive-mobile');
        console.log(menu[0].style);
        
        if(menu[0].style.display === 'block'){
            for(var i=0; i<=menu.length; i++){
                menu[i].style.display = '';
            }
        }
        
        if(menu[0].style.display === ''){
            for(var i=0; i<=menu.length; i++){
                menu[i].style.display = "block";
            }
        }    
    }
    
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
                            <div className="menu-hamburguesa" onClick={this.open}>
                                <Icon name="bars" size="large" style={{color: "white"}} />
                            </div>
                            <Menu inverted pointing fluid stackable>
                                <Link to="/">
                                    <Menu.Item>
                                        <img src='https://react.semantic-ui.com/logo.png' />
                                    </Menu.Item>
                                </Link>
                                <Link to="/" className="responsive-mobile">
                                    <Menu.Item>
                                        <Input className='icon' icon='search' placeholder='Buscando...' />
                                    </Menu.Item>
                                </Link>    
                                <Link to="/" className="responsive-mobile">
                                    <Menu.Item
                                        name='Inicio'
                                        active={activeItem === 'Inicio'}
                                        onClick={this.handleItemClick}
                                    />
                                </Link>
                                <Link to="/clases" className="responsive-mobile">
                                    <Menu.Item
                                        name='Clases'
                                        active={activeItem === 'Clases'}
                                        onClick={this.handleItemClick}
                                    />
                                </Link>
                                <Link to="/proyectos" className="responsive-mobile">
                                    <Menu.Item
                                        name='Proyectos'
                                        active={activeItem === 'Proyectos'}
                                        onClick={this.handleItemClick}
                                    />
                                </Link>
                                <Link to="/desafio" className="responsive-mobile">
                                    <Menu.Item
                                        name='Desafios'
                                        active={activeItem === 'Desafios'}
                                        onClick={this.handleItemClick}
                                    />
                                </Link>
                                <Link to="/video/3" className="responsive-mobile">
                                    <Menu.Item
                                        name='Opciones'
                                        active={activeItem === 'Opciones'}
                                        onClick={this.handleItemClick}
                                    />
                                </Link>    
                                <Link to="" className="responsive-mobile">
                                    <Menu.Item 
                                        name="notificacion"
                                        active={activeItem === 'notificacion'}
                                        onClick={this.handleItemClick}
                                    >
                                        <Icon name="bell" />
                                    </Menu.Item>
                                    <div className="area_notification">
                                        <Menu vertical>
                                            <div className="text-center p-2">Notificaciones</div>
                                            <Menu.Item className="iten_notification">
                                                <Popup
                                                content="Elliot has been a member since July 2012"
                                                key="Elliot Fu"
                                                header="Elliot Fu"
                                                trigger={<Image src="https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg" avatar />}
                                                /> <span style={{color: "#000"}}><b>Andres coello:</b> Ha subido una nueva publicacion. <Icon name="newspaper outline" /></span>
                                            </Menu.Item>
                                            <Menu.Item className="iten_notification">
                                                <Popup
                                                content="Elliot has been a member since July 2012"
                                                key="Elliot Fu"
                                                header="Elliot Fu"
                                                trigger={<Image src="https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg" avatar />}
                                                /> <span style={{color: "#000"}}><b>Andres coello:</b> Ha subido una nueva publicacion. <Icon name="newspaper outline" /></span>
                                            </Menu.Item>
                                            <div className="text-center p-2">ver todos</div>
                                        </Menu>
                                    </div>
                                </Link>
                                <Link to="" className="responsive-mobile">
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
                                            trigger={<Image src="https://static.platzi.com/media/avatars/avatars/programandres_415dc47e-e96a-4a50-9f8d-00a815095ffd.jpg" avatar />}
                                            /> Andres Coello
                                    </Menu.Item>
                                </Link>    
                            </Menu>
                        </nav>
                    </div>
                </header>  
            </>
        );
    }
}

export default Header;