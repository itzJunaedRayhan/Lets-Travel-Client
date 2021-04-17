import React from 'react';
import './Blogs.css'
import blog1 from '../../../images/Blog/blog-1.jpg'
import blog2 from '../../../images/Blog/blog-2.jpg'
import blog3 from '../../../images/Blog/blog-3.jpg'
import blog4 from '../../../images/Blog/blog-4.jpg'
import Blog from '../Blog/Blog';
const blogData = [
    {
        image : blog1,
        heading : 'LOREM IPSUM DOLOR',
        date : '17/02/1999' ,
        writer : 'Emma Stone',
        comment : '10 comments',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, commodo consequat.'
    },
    {
        image : blog2,
        heading : 'LOREM IPSUM DOLOR',
        date : '14/06/2006' ,
        writer : 'Ben Affleck',
        comment : '15 comments',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, commodo consequat.'
    },
    {
        image : blog3,
        heading : 'LOREM IPSUM DOLOR',
        date : '1/05/2019' ,
        writer : 'Peter Parker',
        comment : '18 comments',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, commodo consequat.'
    },
    {
        image : blog4,
        heading : 'LOREM IPSUM DOLOR',
        date : '17/04/2021' ,
        writer : 'Junaed Islam',
        comment : '99 comments',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, commodo consequat.'
    }
]
const Blogs = () => {
    return (
        <div className="blog-section">
            <div className="blog-header text-center">
                <h3>BLOGS</h3>
                <h2>LATEST BLOGS</h2>
            </div>
            <div className="blogs">
                {
                    blogData.map(blog => <Blog blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;