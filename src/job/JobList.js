import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './JobList.css';

class JobList extends Component {
    render() {
        return (
            <div className="polls-container">
                <div className="no-polls-found">
                    <h1>Hello, jobseeker</h1>
                    <p>This page under construction!!</p>
                </div>
            </div>
        );
    }
}

export default withRouter(JobList);