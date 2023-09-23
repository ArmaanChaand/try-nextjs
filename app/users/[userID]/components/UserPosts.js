import { PostBox } from "./PostBox"
export default async function UserPosts({promise}){
    const userPosts = await promise
    return (
        <div className="w-full flex-none flex justify-between items-start flex-wrap gap-5">
            {userPosts.map(post => (
                <PostBox
                    key={post.id}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>
    )
}