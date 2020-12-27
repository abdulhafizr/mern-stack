import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './useStyles';
import {useHistory} from 'react-router-dom';
import {blog_image} from '../../../assets';

const Blog = () => {
    const history = useHistory();
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} onClick={() => history.push('/detail-blog')}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        className={classes.image_blog}
                        image={blog_image}
                    />
                    <CardContent>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, facilis?
                        </Typography>
                        <Typography variant="caption" color="primary">
                            author : <span className={classes.author}>abdul hafiz ramadan</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>    
            </Card> 
        </Grid>
    )
}

export default Blog;
