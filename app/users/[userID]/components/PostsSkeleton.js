export function UserBoxSkeleton(){
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title bg-stone-500 rounded w-full h-8 animate-pulse"></h2>
                <p className="bg-stone-500 rounded w-full h-5 animate-pulse"></p>
                <p className="bg-stone-500 rounded w-1/2 h-5 animate-pulse"></p>
                <div className="card-actions justify-end">
                <button className="btn w-20 bg-stone-500 border-none animate-pulse"></button>
                </div>
            </div>
        </div>
    )
}
export function UserPostsSkeleton(){
    
    return (
        <div className="w-full flex-none flex justify-between items-start flex-wrap gap-5">
           <UserBoxSkeleton/>
           <UserBoxSkeleton/>
           <UserBoxSkeleton/>
        </div>
    )
}