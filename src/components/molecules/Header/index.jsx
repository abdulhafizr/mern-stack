import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

const Header = () => {
    const [auth] = useState(true)
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar variant="dense" className={classes.root}>
                <Typography variant="h5">
                    <Link to="/" className={classes.brand}>
                        AHR
                    </Link>
                </Typography>
                <div className={classes.side_menu}>
                    {
                        auth && (
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        )
                    }
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
