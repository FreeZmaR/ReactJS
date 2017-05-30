import React from 'react';

export default class ModalLogInForm extends React.Component
{
    render(){
        return (
            <form>
                <div className="form-group row">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="pass" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="pass" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-sm-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Sign In</button>
                        <button type="submit" className="btn btn-danger">Sing Up</button>
                    </div>
                </div>
            </form>
        );
    }
}