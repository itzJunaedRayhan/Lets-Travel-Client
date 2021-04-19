import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendar, faUser, faComment} from '@fortawesome/free-solid-svg-icons'
const Blog = ({blog}) => {
    return (
        <div className="blog">
            <div className="blog-image">
                <img src={blog.image} alt="" className=""/>
            </div>
            <h6>{blog.heading}</h6>
            <div className="blog-info">
                <div className="date"><FontAwesomeIcon className="icon" icon={faCalendar} /><span>{blog.date}</span></div>
                <div className="writer"><FontAwesomeIcon className="icon" icon={faUser} /><span>{blog.writer}</span></div>
                <div className="comment"><FontAwesomeIcon className="icon" icon={faComment} /><span>{blog.comment}</span></div>
            </div>
            <p>{blog.text}</p>
            <button type="submit" className="btn btn-danger">Read More</button>
        </div>
    );
};

export default Blog;