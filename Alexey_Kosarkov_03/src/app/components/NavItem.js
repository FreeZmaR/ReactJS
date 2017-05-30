import React from 'react';

export default class NavItem extends React.Component
{
    render(){
        return(
            <li className ={this.props.cl}>
                <a className="nav-link" href={this.props.link}>{this.props.name}</a>
            </li>
        );
    }
}
