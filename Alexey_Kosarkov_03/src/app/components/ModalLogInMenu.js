import React from 'react';
import LogInForm from './ModalLogInForm';

export default class ModalLogInMenu extends React.Component
{

    render(){
        return(
            <div className="modal fade" id="Modal" style={{tabIndex:-1}} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Log IN</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <LogInForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
