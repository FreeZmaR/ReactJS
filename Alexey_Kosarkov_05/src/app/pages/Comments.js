import React from 'react';
import axios from 'axios';
import Comment from './../components/CommentList';

export default class Comments extends React.Component
{
    constructor(){
        super(...arguments);

        this.state = {
            comments:[],
        }
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then( (response) => {
                let {data} = response;
                this.setState({
                    comments:data,
                });
            });
    }

    render(){

        let comment = this.state.comments.map((comm, index) => {
            return <Comment
                comment = {comm}
                key = {index}
            />
        });
        return (
            <div>
                {comment}
            </div>
        );
    }
}
