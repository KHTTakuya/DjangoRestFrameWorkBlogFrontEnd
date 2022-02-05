import React, {useContext, useEffect, useState} from "react";
import {BlogItems} from "./BlogItems";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from "axios";

import {MainUrl} from "../../URL";
const url = MainUrl

export const CategoryBlogList = ({category}) => {
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        const getCategoryList = async () => {
            const res = await axios.get(`${url}/blog/?category=${category}`, {})
            setCategoryList(res.data)
        }
        getCategoryList()
    })

    const getCategory = (blog) => {
        if (blog === 1) {
            return 'Python';
        } else if (blog === 2) {
            return "JavaScript"
        } else if (blog === 3) {
            return "MachineLearning"
        } else {
            return 'その他';
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <h1>カテゴリー：{getCategory(category)}</h1>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {categoryList.map((blog, index)=>(
                    <Grid item sm={6} md={4} key={index}>
                        <BlogItems blog={blog} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}