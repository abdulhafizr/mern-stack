import React from 'react'
import {Grid, Card, FormControl, TextField, Button, Icon} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './useStyles';
import Particles from 'react-particles-js';


const Login = () => {
    const classes = useStyles();
    return (
        <Grid container justify="flex-end" alignItems="center" className={classes.root}>
            <div className={classes.bg_login}>
                <Particles />
            </div>
            <Grid item sm={6} md={4}>
                <Card className={classes.m}>
                    <div className={classes.form_login}>
                        <h2 style={
                            {textAlign: 'center', fontSize: 26}
                        }>
                            Login Page
                        </h2>
                        <form autoComplete="off">
                            <FormControl fullWidth className={classes.mb}>
                                <TextField type="email" id="email" required={true} label="Email" />
                            </FormControl>
                            <FormControl fullWidth className={classes.mb}>
                                <TextField type="password" id="password" required={true} label="Password" />
                            </FormControl>
                            <div>
                                <Button variant="contained" size="small" endIcon={<Icon>send</Icon>} color="primary">Login</Button>
                            </div>
                            <small>
                                belum punya akun? <Link to="/register">Daftar</Link>
                            </small>
                        </form>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Login
