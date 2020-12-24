import {Grid, Card, FormControl, TextField, Button, Icon, makeStyles} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import {register_bg} from '../../assets';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        spacing: 0,
        overFlow: 'hidden'
    },
    bg_register: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: `url(${register_bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'blur(2px)',
        zIndex: -99
    },
    form_login: {
        background: '#fff',
        padding: 10,
    },
    mb: {
        marginBottom: 4
    },
    m: {
        margin: 10
    }
}))

const Register = () => {
    const classes = useStyles();
    return (
        <Grid container justify="flex-end" alignItems="center" className={classes.root}>
            <div className={classes.bg_register}></div>
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
