import { Button, Grid, Card, TextField, FormControl, makeStyles, Icon } from '@material-ui/core';
import React, {Fragment} from 'react';

const useStyles = makeStyles((theme) => ({
    '& > *': {
        margin: theme.spacing(1)
    },
    form_login: {
        padding: 12,
        minWidth: 345
    },
    mb: {
        marginBottom: 5
    }
}))

const Register = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid container 
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                >
                <Grid item lg={5}>
                    <Card>
                        <div className={classes.form_login}>
                            <h2 style={
                                {textAlign: 'center', fontSize: 26}
                            }>
                                Registrasi
                            </h2>
                            <form className={classes.root} autoComplete="off">
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
       </Fragment>
    )
}

export default Register
