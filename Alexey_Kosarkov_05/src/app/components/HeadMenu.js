import React from 'react';
import {Link} from 'react-router';
import Menu from './UlMenu';

export default class HeadMenu extends React.Component
{
    constructor(){
        super(...arguments);
    }

    render(){
        return (
            <nav className={this.props.cl}>
                <div className={this.props.container}>
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            {this.props.pageName}
                        </Link>
                    </div>
                    <div className={this.props.divMenuClass}>
                        <Menu
                            cl={this.props.navMenuClass}
                            menu = {this.props.menu}
                        />
                    </div>
                </div>
            </nav>
        );

    }
}
