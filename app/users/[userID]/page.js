import { getUser } from "@/lib/users/getUser"
import { getUserPosts } from "@/lib/users/getUserPost"
import { UserBox } from "./components/UserBox"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"
import { UserPostsSkeleton } from "./components/PostsSkeleton"
import { getAllUsers } from "@/lib/users/getAllUsers"
import { notFound } from 'next/navigation'

export async function generateMetadata({params}){
    const userData = getUser(params.userID)
    const user = await userData
    if (!user?.name) return {
            title: 'User Not Found'
        }
    
    return {
        title: user.name,
        description: 'This is page for ' + user.name
    }


}


export default async function UserPage({params}){
    const userData = getUser(params.userID)
    const userPostsData = getUserPosts(params.userID)
    // const [user, userPosts] = await Promise.all([userData, userPostsData])
    const user = await userData

    if (!user?.name) { 
        notFound()
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-start items-center p-10 gap-10 overflow-y-auto">
            <UserBox
                name={user.name}
                email={user.email}
            />
            <Suspense fallback={<UserPostsSkeleton/>}>
                <UserPosts
                    promise={userPostsData}
                />
            </Suspense>
        </div>
    )
}

export async function generateStaticParams(){
    const usersData = await getAllUsers()
    const users = usersData
    
    return users.map(user => (
        {
            userID: user.id.toString()
        }
    ))
}