import React from 'react';

export default class UserList extends React.Component
{
    constructor(){
        super(...arguments);
    }

    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 class="panel-title">{this.props.user.username}</h3>
                </div>
                <div className="panel-body">
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.email}</p>
                    <p>{this.props.user.phone}</p>
                    <p>{this.props.user.website}</p>
                </div>
            </div>
        );
    }
}
