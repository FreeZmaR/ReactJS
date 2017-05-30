import React from 'react';
import Context from './../components/MainContext';
import MainNav from './../components/MainNavMenu';

export default class MainLayout extends React.Component
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
            <main className="row">
                <Context
                cl="col-9 align-self-center"
                />
                <MainNav
                    cl="col-3"
                    menu = {menu}
                />
            </main>
        );
    }
}
