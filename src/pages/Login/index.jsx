import {Grid, Card, FormControl, TextField, Button, Icon, makeStyles} from '@material-ui/core';
import React from 'react'
import {Link} from 'react-router-dom';
import {login_bg} from '../../assets';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        spacing: 0,
        background: `url(${login_bg})`,
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'blur(1px)',
        backgroundSize: 'cover',
        overFlow: 'hidden'
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

const Login = () => {
    const classes = useStyles();
    return (
        <Grid container justify="flex-end" alignItems="center" className={classes.root}>
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
