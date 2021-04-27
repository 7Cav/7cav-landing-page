import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icons: {
        position: 'absolute',
        left: '50%',
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>7th CAVALRY GAMING</h1>
                        {/* TODO: Add buttons/icons */}
                        <span className={classes.icons}>Discord
                        TeamSpeak</span>
                        Continue to Forums
                </Toolbar>
            </AppBar>
        </div>
    );
}