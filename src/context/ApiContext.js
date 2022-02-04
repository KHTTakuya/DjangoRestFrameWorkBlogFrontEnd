import React, {useState, useEffect, createContext} from "react";
import axios from "axios";
import {MainUrl} from "../URL";

export const ApiContext = createContext();
const url = MainUrl

export const GetBlogs = (props) => {
    const [blogs, setBlog] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState([]);
    const [detail, setDetail] = useState(false)
    const [category, setCategory] = useState('')

    useEffect(() => {
        axios.get(`${url}/blog/`, {})
            .then((res) => {
                setBlog(res.data)
            });

    }, []);

    const value = {
        blogs,
        selectedBlog,
        setSelectedBlog,
        detail,
        setDetail,
        category,
        setCategory
    }

    return (
        <ApiContext.Provider value={value}>
            {props.children}
        </ApiContext.Provider>

    )
}

