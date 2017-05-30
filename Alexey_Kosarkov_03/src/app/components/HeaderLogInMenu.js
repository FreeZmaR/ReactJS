import React from 'react';
import ModelLogInMenu from './ModalLogInMenu';

class HeaderLogInMenu extends React.Component
{
    render(){
        return (
            <div className="nav-item">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#Modal" >
                    Log In
                </button>
            <ModelLogInMenu/>
            </div>

        );
    }
}

export default HeaderLogInMenu;