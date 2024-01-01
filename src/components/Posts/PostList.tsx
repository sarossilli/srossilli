import React from 'react';
import Post from './Post/Post';

function PostList() {
    return (
        <>
            <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8`}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </>

    )
}

export default PostList