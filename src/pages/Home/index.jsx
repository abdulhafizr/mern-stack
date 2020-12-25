import { Button, Container, Grid } from '@material-ui/core';
import React from 'react';
import { Blog } from '../../components/molecules';
import useStyles from './useStyles';

const Home = () => {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.header}>
                <h2>All Blog</h2>
                <div>
                    <Button variant="contained" color="primary">
                        Add Blog
                    </Button>
                </div>
            </div>
            <hr />

            <Grid container spacing={3} className={classes.mt}>
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </Grid>
            
            <div className={classes.paginate}>
                <div className="action_paginate">
                    <Button>
                        Prev
                    </Button>
                    <Button>
                        Next
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Home
