import {Grid, Card, FormControl, TextField, Button, Icon} from '@material-ui/core';
import React from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import useStyles from './useStyle';

const Register = () => {
    const classes = useStyles();
    return (
        <Grid container justify="flex-end" alignItems="center" className={classes.root}>
            <div className={classes.bg_register}>
                <Particles />
            </div>
            <Grid item sm={6} md={4}>
                <Card className={classes.m}>
                    <div className={classes.form_login}>
                        <h2 style={
                            {textAlign: 'center', fontSize: 26}
                        }>
                            Registrasi Page
                        </h2>
                        <form autoComplete="off">
                            <FormControl fullWidth className={classes.mb}>
                                <TextField type="email" name="email" id="email" required={true} label="Email" />
                            </FormControl>
                            <FormControl fullWidth className={classes.mb}>
                                <TextField type="password" name="password" id="password" required={true} label="Password" />
                            </FormControl>
                            <FormControl fullWidth className={classes.mb}>
                                <TextField type="password" name="password2" id="password2" required={true} label="Konfirmasi Password" />
                            </FormControl>
                            <div>
                                <Button variant="contained" size="small" endIcon={<Icon>send</Icon>} color="primary">Registrasi</Button>
                            </div>
                            <small>
                                sudah punya akun? <Link to="/login">Login</Link>
                            </small>
                            
                        </form>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Register
