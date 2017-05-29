import React from 'react';
import LogInMenu from  './../components/HeaderLogInMenu';

export default class HeaderLayout extends React.Component
{
    render(){
        return(
            <div>
                <LogInMenu/>
            </div>
        );
    }
}