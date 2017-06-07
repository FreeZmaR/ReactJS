import React from 'react';
import {Link} from 'react-router';

import HeadMenu from './../components/HeadMenu';

export default class PageLayout extends React.Component
{
    constructor(){
        super(...arguments);
        this.pageTitle = "Home Work#5";
        this.upMenu = [
            {
               link:"/",
               name:"Главная"
            },
            {
                link:"/comments",
                name:"Коментарии"
            },
            {
                link:"/users",
                name:"Пользовотели"
            },
            {
                link:"/blog",
                name:"Блог"
            },
        ];
    }

    render(){
        return (
            <div>
                <HeadMenu
                    cl = "navbar navbar-default"
                    container = "container-fluid"
                    pageName = {this.pageTitle}
                    menu = {this.upMenu}
                    divMenuClass = "collapse navbar-collapse"
                    navMenuClass ="nav navbar-nav navbar-right"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-offset-2 cl-lg-8">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
