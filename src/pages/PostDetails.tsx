import React from 'react';
import { useParams } from "react-router-dom";
import { generateClient } from 'aws-amplify/api'
import { useQuery } from '@tanstack/react-query';
import { getPost } from '../graphql/queries';
import MarkdownRenderer from "../components/MarkdownView/MarkdownRenderer"
import PostCreateForm from '../ui-components/PostCreateForm';
import PostUpdateForm from '../ui-components/PostUpdateForm';

function PostDetails() {
    const { id } = useParams();
    const client = generateClient()

    const {
        data,
        isError: isErrorQuery,
    } = useQuery({
        queryKey: ["getPost", id],
        queryFn: async () => {
            if (!id) { return }

            const response = await client.graphql({
                query: getPost,
                variables: { id: id },
            });

            return response.data?.getPost;
        },
    });

    return isErrorQuery ? <h1>ERROR</h1> : (
        <div className="w-full flex flex-col justify-center">
            <h1 className='uppercase text-2xl'>{data?.title}</h1>
            <div className='grow'>
                <MarkdownRenderer text={data?.content || ""} />
            </div>
        </div>
    )

}

export default PostDetails