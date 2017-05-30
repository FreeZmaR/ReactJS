import React from 'react';

export default class MainPostContext extends React.Component
{
    render(){
        return(
            <section className={this.props.cl}>
                <h1>Home Work <span className="badge badge-default">#3</span></h1>
                <p>
                    Text
                </p>
            </section>
        );
    }
}
