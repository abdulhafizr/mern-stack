import {Grid, Card, FormControl, TextField, Button, Icon, makeStyles} from '@material-ui/core';
import React from 'react';
import {register_bg} from '../../assets';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        spacing: 0,
        background: `url(${register_bg})`,
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
    mr: {
        marginRight: 15
    }
}))

const Register = () => {
    const classes = useStyles();
    return (
        <Grid container justify="flex-end" alignItems="center" className={classes.root}>
            <Grid item sm={4}>
                <Card className={classes.mr}>
                    <div className={classes.form_login}>
                        <h2 style={
                            {textAlign: 'center', fontSize: 26}
                        }>
                            Registrasi
                        </h2>
                        <form autoComplete="off">
                            <FormControl fullWidth className={classes.mb}>
                                <TextField type="email" id="standard-basic" required={true} label="Email" />
                            </FormControl>
                            <FormControl fullWidth className={classes.mb}>
                                <TextField type="password" id="standard-basic" required={true} label="Password" />
                            </FormControl>
                            <FormControl fullWidth className={classes.mb}>
                                <TextField type="password" id="standard-basic" required={true} label="Konfirmasi Password" />
                            </FormControl>
                            <Button variant="contained" size="small" style={{marginRight: 4}} color="secondary">Kembali</Button>
                            <Button variant="contained" size="small" endIcon={<Icon>send</Icon>} color="primary">Registrasi</Button>
                        </form>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Register
