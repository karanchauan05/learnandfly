import React, { useState, useEffect } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://api.example.com/posts');
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <div className="blog-container">
            <h1 className="blog-title">Blog Section</h1>
            {posts.length === 0 ? (
                <p>Loading posts...</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="blog-post">
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-content">{post.content}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Blog;