import React from "react";
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";

import {NavBar} from "../components/NavBar/NavBar";
import {AboutMe} from "../components/AboutMe/AboutMe";
import {GetBlogs} from "../context/ApiContext";
import {BlogList} from "../components/Content/BlogList";

export const MainPage = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <NavBar />
            </Grid>
            <Container >
                <Grid container spacing={5}>
                    <Grid item xs={12} md={9}>
                        <BlogList />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <AboutMe />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}