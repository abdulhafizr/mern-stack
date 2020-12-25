import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, {useState} from 'react'
import useStyles from './useStyles';

const Header = () => {
    const [auth, setAuth] = useState(true)
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar variant="dense" className={classes.root}>
                <Typography variant="h6">
                    AHR Blog
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
