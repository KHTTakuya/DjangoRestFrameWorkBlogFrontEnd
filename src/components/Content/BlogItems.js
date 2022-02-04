import React, {useContext} from "react";
import {ApiContext} from "../../context/ApiContext";

import Box from "@mui/material/Box";

import './Content.css'
import {Card, CardActionArea, CardMedia} from "@mui/material";


export const BlogItems = ({ blog }) => {
    const { setSelectedBlog } = useContext(ApiContext)
    return (
        <Card sx={{width: 250, height: 300}}
              onClick={() => setSelectedBlog(blog)} className="blog-item-box">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image={blog.thum}
                    alt="サムネイル"
                >
                </CardMedia>
                <h2>{blog.title}</h2>
                <div className="blog-item">
                    <p>投稿日：<br/>{blog.created_at.slice(0, 10)}</p>
                    <p>投稿者:<br/>タカハシタクヤ</p>
                </div>
            </CardActionArea>
        </Card>
    )
}