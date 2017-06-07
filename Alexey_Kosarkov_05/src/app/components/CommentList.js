import React from 'react';

export default class CommentList extends React.Component
{
    constructor(){
        super(...arguments);
    }

    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 class="panel-title">{this.props.comment.name}</h3>
                </div>
                <div className="panel-body">
                    <div className="well well-lg">
                        {this.props.comment.email}
                    </div>
                    {this.props.comment.body}
                </div>
            </div>
        );
    }
}
