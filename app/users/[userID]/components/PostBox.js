
export function PostBox({title, body}){
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
            <h2 className="card-title">{title.substring(0, 40) + ' ...'}</h2>
            <p>{body.substring(0, 100) + ' ...'}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">View</button>
            </div>
            </div>
        </div>
    )
}