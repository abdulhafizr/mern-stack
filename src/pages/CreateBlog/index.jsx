import { Button, Container, FormControl, Grid, Input, TextField } from '@material-ui/core';
import React from 'react';
import useStyles from './useStyles';
import {blog_image} from '../../assets';

const CreateBlog = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container className={classes.create_body}>
                <Grid item xs={12} md={10}>
                    <FormControl fullWidth>
                        <TextField 
                            multiline
                            label="Title"
                            name="title"
                            placeholder="Title here.."
                            variant="outlined"
                            size="small"
                        />
                        <img src={blog_image} className={classes.img_preview} alt="preview"/>
                        <Input 
                            type="file"
                            name="photo"    
                            className={classes.iPhoto}
                        />
                        <TextField
                            id="body"
                            name="body"
                            label="Body"
                            placeholder="Body here.."
                            multiline
                            variant="outlined"
                        />
                        <Button
                            className={classes.btn_tambah}
                            color="primary"
                            variant="contained"
                        >
                            ADD BLOG
                        </Button>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CreateBlog
