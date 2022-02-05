import React, {useContext, useEffect, useState} from "react";
import {ApiContext} from "../../context/ApiContext";
import ReactMarkdown from "react-markdown";

import Box from "@mui/material/Box";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Button} from "@mui/material";
import {useParams} from "react-router-dom";
import axios from "axios";
import {MainUrl} from "../../URL";
const url = MainUrl

export const BlogDetail = () => {
    const {getCategory} = useContext(ApiContext)
    const [detailData, setDetailData] = useState([])

    const {id} = useParams();
    useEffect(() => {
        const getDetailBlog = async () => {
            const res = await axios.get(`${url}/blog/${id}`, {})
            setDetailData(res.data);
        }
        getDetailBlog()
    }, [id])

    const CheckCreateAt = () => {
        if (typeof detailData.created_at === 'string') {
            return <p>投稿日：{detailData.created_at.slice(0, 10)}</p>
        } else {
            return <p>投稿日：{detailData.created_at}</p>
        }
    }

    return (
        <Box sx={{
            width: "100%"
        }}>
            <Button variant="outlined" startIcon={<ArrowBackIcon />} href={'/'}>
                Back
            </Button>
            <div className="detail-content">
                <div className='detail-top'>
                    <h1>{detailData.title}</h1>
                    <div className='cat-list'>
                        {/*.slice(0, 10)*/}
                        <CheckCreateAt />
                        <p>カテゴリー: {getCategory(detailData)}</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <ReactMarkdown>
                        {detailData.description}
                    </ReactMarkdown>
                </div>
            </div>
            <Button variant="outlined" startIcon={<ArrowBackIcon />} href={'/'}>
                Back
            </Button>
        </Box>
    )
}