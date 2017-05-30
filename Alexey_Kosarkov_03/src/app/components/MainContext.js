import React from 'react';
import Post from './MainPostContext';

export default class MainContext extends React.Component
{
    render(){
        return(
            <div className={this.props.cl}>
                <Post
                    cl="col-8 offset-lg-4"
                />

            </div>
        );
    }
}