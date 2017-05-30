import React from 'react';
import Item from './NavItem';
import UlMenu from  './UlMenu';

export  default class NavMenu extends React.Component
{
    render(){
        let menu =  this.props.menu.map((menu) =>{
            return <Item
                cl = {menu.class}
                link = {menu.link}
                name = {menu.name}
            />
        });
        return (
            <nav className={this.props.nC}>
                <div className={this.props.dC} id = {this.props.dI}>
                    <UlMenu
                        cl={this.props.ulC}
                        menu={menu}
                        login={this.props.login}/>

                </div>
            </nav>
        );
    }
}