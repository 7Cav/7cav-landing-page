import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    container: {
        paddingTop: '35px',
        textAlign: 'center',
    },
    icons: {
        justifyContent: 'center',
        color: 'white',
    },
    links: {
        color: 'yellow',
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>7th CAVALRY GAMING</h1>
                        <Link className={classes.links} href="https://7cav.us">Continue to Forums</Link>
                </Toolbar>
            </AppBar>
{/* TODO: Add buttons/icons */}
            <div className={classes.container}>
            <span className={classes.icons}>Discord TeamSpeak</span>
            </div>
        </div>
    );
}