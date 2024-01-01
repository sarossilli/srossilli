import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PostList from '../components/Posts/PostList';

function Home() {
    return (
        <div className="Home">
            <h1>Hello HOME</h1>
            <PostList />
        </div>
    )

}

export default Home