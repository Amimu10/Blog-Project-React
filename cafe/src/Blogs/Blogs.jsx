import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmarks, handleMarksRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
         fetch("blog.json")
         .then(res=>res.json())
         .then(data=> setBlogs(data));
    },[])
    return (
        <div className="md:w-2/3"> 
            <h1>Blogs : {blogs.length}</h1>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handleAddToBookmarks={handleAddToBookmarks} handleMarksRead={handleMarksRead}></Blog>) 
            }
        </div> 
    );
};

Blogs.PropTypes = {
    handleAddToBookmarks : PropTypes.func
    
}
export default Blogs;