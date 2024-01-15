import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PostList from '../components/Posts/PostList';

function Home() {
    return (
        <div className="Home">
            <PostList />
        </div>
    )

}

export default Home