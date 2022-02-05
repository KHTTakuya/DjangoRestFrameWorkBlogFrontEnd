import GetBlogs, {ApiContext} from "./context/ApiContext";
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {NavBar} from "./components/NavBar/NavBar";
import Container from "@mui/material/Container";
import {BlogDetail} from "./components/Content/BlogDetail";
import {AboutMe} from "./components/AboutMe/AboutMe";
import React from "react";
import {BlogList} from "./components/Content/BlogList";
import {CategoryBlogList} from "./components/Content/CategoryPage";


function App() {

    return (
      <GetBlogs>
          <Router>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <NavBar />
                  </Grid>
                  <Container >
                      <Grid container spacing={5}>
                          <Grid item xs={12} md={9}>
                              <Switch>
                                  <Route exact path="/">
                                      <BlogList />
                                  </Route>
                                  <Route path='/blog/:id'>
                                      <BlogDetail />
                                  </Route>
                                  <Route path='/category=1'>
                                      <CategoryBlogList category={1} />
                                  </Route>
                                  <Route path='/category=2'>
                                      <CategoryBlogList category={2} />
                                  </Route>
                              </Switch>
                          </Grid>
                          <Grid item xs={12} md={3}>
                              <AboutMe />
                          </Grid>
                      </Grid>
                  </Container>
              </Grid>
          </Router>
      </GetBlogs>
  );
}

export default App;
