import React from 'react';
import axios from 'axios';
import User from './../components/UserList';

export default class Users extends React.Component
{
    constructor(){
        super(...arguments);
        this.state = {
            users:[],
        }

        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then( (response) =>{
                let {data} = response;
                this.setState({
                    users:data,
                });
            });
    }

    render(){

        let users =  this.state.users.map((user, index) =>{
            return <User
                key={index}
                user = {user}
            />
        });
        return (
            <div>
                {users}
            </div>
        );
    }
}