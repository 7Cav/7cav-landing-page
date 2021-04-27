import React, { Component } from 'react';
import './App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/pagebg2.png"})`
    },
}))

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <p>Hello</p>
            </div>
        )
    }
}

export default LandingPage;