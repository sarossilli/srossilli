import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PostList from '../components/Posts/PostList';
import {useParams} from "react-router-dom";

function PostDetails() {
    const {id} = useParams();
    return (
        <div className="PostDetails">
            <h1>Test The Post</h1>
            <p>        
                ID: {id}
            </p>
        </div>
    )

}

export default PostDetails