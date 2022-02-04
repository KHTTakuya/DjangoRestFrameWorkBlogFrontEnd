import React, {useContext} from "react";
import {BlogItems} from "./BlogItems";

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {ApiContext} from "../../context/ApiContext";


export const BlogList = () => {
    const {blogs} = useContext(ApiContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {blogs.map((blog, index)=>(
                    <Grid item sm={6} md={4} key={index}>
                        <BlogItems blog={blog} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}