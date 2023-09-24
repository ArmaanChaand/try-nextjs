import { getAllUsers } from "@/lib/users/getAllUsers";
import { UsersTable } from "./components/UsersTable";

export const metadata = {
    title: "Users",
    description: 'Server components, Data fetching, Dynamic routes and Metadata.'
}
export default async function UsersHome(){
    const usersData = await getAllUsers()
    
    const users = await usersData

    console.log(users[6])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center flex flex-col gap-2">
                <div className="max-w-md border-b-2 w-full pb-2">
                <h1 className="text-5xl font-bold">Users</h1>
                </div>
                <div className="w-11/12">
                    <UsersTable
                        usersList={users}
                    />
                </div>
            </div>
        </div>
    )
}