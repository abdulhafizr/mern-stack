import React from 'react';
import {Card, CardContent, Container, Grid, Typography} from '@material-ui/core';
import useStyles from './useStyles';
import {blog_image} from '../../assets';

const DetailBlog = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={12} md={9} style={{marginBottom: 8}}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fugiat.
                            </Typography>
                            <img src={blog_image} className={classes.image_blog} alt="img_post"/>
                            <Typography variant="caption" color="primary">
                                author : <span className={classes.author}>abdul hafiz ramadan</span>
                            </Typography>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi debitis, ipsum accusantium asperiores consequatur quam nesciunt reiciendis dignissimos voluptas sit magnam optio tenetur officiis fugiat, animi pariatur nam ea voluptatum!</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi debitis, ipsum accusantium asperiores consequatur quam nesciunt reiciendis dignissimos voluptas sit magnam optio tenetur officiis fugiat, animi pariatur nam ea voluptatum!</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi debitis, ipsum accusantium asperiores consequatur quam nesciunt reiciendis dignissimos voluptas sit magnam optio tenetur officiis fugiat, animi pariatur nam ea voluptatum!</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi debitis, ipsum accusantium asperiores consequatur quam nesciunt reiciendis dignissimos voluptas sit magnam optio tenetur officiis fugiat, animi pariatur nam ea voluptatum!</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi debitis, ipsum accusantium asperiores consequatur quam nesciunt reiciendis dignissimos voluptas sit magnam optio tenetur officiis fugiat, animi pariatur nam ea voluptatum!</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={12} md={3} style={{marginBottom: 8}}>
                    <Card>
                        <CardContent>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi debitis, ipsum accusantium asperiores consequatur quam nesciunt reiciendis dignissimos voluptas sit magnam optio tenetur officiis fugiat, animi pariatur nam ea voluptatum!</p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DetailBlog
