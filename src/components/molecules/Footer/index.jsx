import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Instagram, Facebook, Telegram, GitHub} from '@material-ui/icons';
import useStyles from './useStyles';
import { Link } from 'react-router-dom';

const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar variant="dense" className={classes.root}>
                <Typography variant="h6">
                    <Link to="/" className={classes.brand}>
                        AHR
                    </Link>
                </Typography>
                <div className={classes.side_menu} color="#fff">
                    <a href="https://www.instagram.com/abdul_hafiz_r/" target="_blank" className={classes.link}>
                        <Instagram />
                    </a>
                    <a href="https://t.me/abdulhafizramadan" target="_blank" className={classes.link}>
                        <Telegram />
                    </a>
                    <a href="#" className={classes.link}>
                        <Facebook />
                    </a>
                    <a href="https://github.com/abdulhafizr" target="_blank" className={classes.link}>
                        <GitHub />
                    </a>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Footer
