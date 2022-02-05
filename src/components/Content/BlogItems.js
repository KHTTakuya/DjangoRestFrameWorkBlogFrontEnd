import React, {useContext} from "react";
import {ApiContext} from "../../context/ApiContext";

import './Content.css'
import {Card, CardActionArea, CardMedia} from "@mui/material";


export const BlogItems = ({ blog }) => {
    const { getCategory, GetDetailBlog} = useContext(ApiContext)


    return (
        <Card sx={{width: {md: 230, sm: 300, xs: 400}, height: 350}}
              className="blog-item-box">
            <CardActionArea href={`/blog/${blog.id}`} onClick={()=> GetDetailBlog(blog.id)}>
                <CardMedia
                    component="img"
                    height="150"
                    image={blog.thum}
                    alt="サムネイル"
                >
                </CardMedia>
                <h2>{blog.title}</h2>
                <p>カテゴリー：{getCategory(blog)}</p>
                <div className="blog-item">
                    <p>投稿日：{blog.created_at.slice(0, 10)}</p>
                </div>
            </CardActionArea>
        </Card>
    )
}