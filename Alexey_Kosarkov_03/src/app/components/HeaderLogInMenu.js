import React from 'react';

export default class HeaderLogInMenu extends React.Component
{
    render(){
        //Можно было разбить еще на компоненты но я что - то поленился
        return (
            <form className="form-inline">
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <span className="input-group-addon" id="btnGroupAddon">Email</span>
                    <input type="email" className="form-control"   aria-describedby="btnGroupAddon" name="email"/>
                </div>
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                  <span className="input-group-addon" id="btnGroupAddon">Password</span>
                    <input type="password" className="form-control"  aria-describedby="btnGroupAddon" name="password"/>
                </div>

                <button type="submit" className="btn btn-outline-primary">Log IN</button>
                <button type="button" className="btn btn-outline-danger">Sing Up</button>
            </form>
        );
    }
}
