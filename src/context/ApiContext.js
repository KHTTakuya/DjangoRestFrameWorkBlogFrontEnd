import React, {useState, useEffect, createContext, useMemo} from "react";
import axios from "axios";
import { withCookies } from "react-cookie";
import {MainUrl} from "../URL";

export const ApiContext = createContext();
const url = MainUrl

export const GetBlogs = (props) => {
    const [blogs, setBlog] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState([]);
    const [urlDetail, setUrlDetail] = useState([])
    const [detail, setDetail] = useState(false)
    const [category, setCategory] = useState('')

    useEffect(() => {
        axios.get(`${url}/blog`, {})
            .then((res) => {
                setBlog(res.data)
            });

    }, []);

    const getCategory = (blog) => {
        if (blog.category === 1) {
            return 'Python';
        } else if (blog.category === 2) {
            return "JavaScript"
        } else if (blog.category === 3) {
            return "MachineLearning"
        }
        else {
            return 'その他';
        }
    }

    const value = {
        blogs,
        selectedBlog,
        setSelectedBlog,
        detail,
        setDetail,
        category,
        setCategory,
        urlDetail,
        setUrlDetail,
        getCategory,
    }

    return (
        <ApiContext.Provider value={value}>
            {props.children}
        </ApiContext.Provider>

    )
}

export default withCookies(GetBlogs)