import React from 'react';

export default class UlMenu extends React.Component
{
    render(){
        return(
            <ul className={this.props.cl}>
                {this.props.menu}
                {this.props.login}
            </ul>
        );
    }
}
