import React from 'react';
import UlMenu from './UlMenu';
import Item from './NavItem';

export default class MainNavMenu extends React.Component
{
    render(){
        let menu =  this.props.menu.map((menu) =>{
            return <Item
                cl = {menu.class}
                link = {menu.link}
                name = {menu.name}
            />
        });
        return(
            <div className={this.props.cl}>
                <h3>Меню</h3>
                <UlMenu
                    menu = {menu}
                />
            </div>


        );
    }
}
