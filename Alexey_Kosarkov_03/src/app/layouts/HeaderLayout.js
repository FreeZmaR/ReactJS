import React from 'react';
import LogInMenu from  './../components/HeaderLogInMenu';
import NavMenu from './../components/NavMenu';

export default class HeaderLayout extends React.Component
{
    render(){
        let menu = [
            {
                name:'Main',
                link: '#',
                class: "nav-item active col"
            },
            {
                name:'Contact',
                link: '#',
                class: "nav-item col"
            },
            {
                name:'About',
                link: '#',
                class: "nav-item col"
            },

        ];
        return(
            <header>

                <NavMenu
                    nC="navbar navbar-toggleable-md navbar-inverse bg-primary"
                    dC="collapse navbar-collapse "
                    ulC="navbar-nav mr-auto row justify-content-around"
                    menu = {menu}
                    dI="navbarColor02"
                    login={<LogInMenu/>}
                />
            </header>
        );
    }
}