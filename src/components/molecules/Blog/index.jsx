import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './useStyles';
import {blog_image} from '../../../assets';

const Blog = () => {
    const classes = useStyles();
    return (
        <Grid item sm="12" md="3">
            <Card>
                <CardActionArea>
                    <CardMedia
                        className={classes.image_blog}
                        image={blog_image}
                    />
                    <CardContent>
                        <Typography variant="h6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, facilis?
                        </Typography>
                    </CardContent>
                </CardActionArea>    
            </Card> 
        </Grid>
    )
}

export default Blog;
