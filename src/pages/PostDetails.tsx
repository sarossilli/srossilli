import React from 'react';
import { useParams } from "react-router-dom";
import { generateClient } from 'aws-amplify/api'
import { useQuery } from '@tanstack/react-query';
import { getPost } from '../graphql/queries';
import MarkdownRenderer from "../components/MarkdownView/MarkdownRenderer"

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
        <div className="PostDetails">
            <h1 className='flex text-sm uppercase text-g1'>{data?.title}</h1>
            <MarkdownRenderer text={data?.content || ""} />
        </div>
    )

}

export default PostDetails