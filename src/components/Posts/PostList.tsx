import React from 'react';
import { generateClient } from 'aws-amplify/api';
import { useQuery } from '@tanstack/react-query';
import { createdAt, listPosts } from '../../graphql/queries';
import PostInfo from './Post/PostInfo';
import { ModelSortDirection } from '../../API';

interface PostListProps {
}

function PostList(props?: PostListProps) {
    const client = generateClient()

    const {
        data,
        isLoading,
        isSuccess,
        isError: isErrorQuery,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const response = await client.graphql({
                query: listPosts,
                variables:{}
            });

            const allPosts =
                response?.data?.listPosts?.items

            if (!allPosts) return null;

            return allPosts;
        },
    });


    return (
        <>
            <div className={`m-5 grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-6`}>
                {data?.map((post) => (
                    <p key={post.id}><PostInfo post={post}></PostInfo></p>
                ))}
            </div>
        </>

    )
}

export default PostList
