import React from 'react';
import {Link} from 'react-router';

export default class UlMenu extends React.Component
{
    constructor(){
        super(...arguments);
    }

    isActive(href){
       return window.location.pathname == href;
    }

    render() {
        let menu = this.props.menu.map((item, index) => {
            return (
                <li className={this.isActive(item.link) ? "active" : ""}
                    key={index}>
                    <Link to={item.link}>{item.name}</Link>
                </li>
            );
        });
        return (
            <ul className={this.props.cl}>
                {menu}
            </ul>
        );
    }

}
