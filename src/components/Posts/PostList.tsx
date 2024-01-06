import { generateClient } from 'aws-amplify/api';
import { useQuery } from '@tanstack/react-query';
import { listPosts } from '../../graphql/queries';
import PostInfo from './Post/PostInfo';

function PostList() {
    const client = generateClient()

    const {
        data
    } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const response = await client.graphql({
                query: listPosts,
            });

            const allPosts =
                response?.data?.listPosts?.items

            if (!allPosts) return null;

            return allPosts;
        },
        staleTime: 5,
    });


    return (

        <>
            <div className={`m-5 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3`}>
                {data?.map((post) => (
                    <p key={post.id}><PostInfo post={post}></PostInfo></p>
                ))}
            </div>
        </>

    )
}

export default PostList
