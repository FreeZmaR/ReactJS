import React from 'react';
import Header from './HeaderLayout';
import Main from './MainLayout';
//import Footer from './FooterLayout';

export default class PageLayout extends React.Component
{
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                <Main/>
            </div>
        );
    }
}
