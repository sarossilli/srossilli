import React from 'react';
import Post from './Post/Post';

function PostList() {
    return (
        <>
            <div className={`m-5 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6`}>
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