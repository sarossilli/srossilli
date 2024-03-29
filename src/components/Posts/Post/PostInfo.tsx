import React from 'react';
import { Post } from '../../../API';
import { NavLink } from 'react-router-dom';

interface PostProps {
    post: Post
}

function PostInfo(postProps: PostProps) {
    const post: Post = postProps.post
    return (
        <div className="max-w-sm px-1 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <NavLink to={`/posts/${post.id}`}>
                <img className="rounded-t-lg" src={post.banner} alt="" />
            </NavLink>
            <div className="p-5">
                <NavLink to={`/posts/${post.id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                </NavLink>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.shortDescription}</p>
                <NavLink to={`/posts/${post.id}`} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </NavLink>
            </div>
        </div>
    )
}

export default PostInfo