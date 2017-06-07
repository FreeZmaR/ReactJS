import React from 'react';
import {Link} from 'react-router';

export default class Index extends React.Component
{
    constructor(){
        super(...arguments);
    }

    render(){
        return (
            <div className="jumbotron">
                <h1>Home Work #5</h1>
                <p> Kosarkov Alexey</p>
                <Link to="/" className ="btn btn-primary btn-lg">
                    Hellow
                </Link>
            </div>
        );
    }
}
