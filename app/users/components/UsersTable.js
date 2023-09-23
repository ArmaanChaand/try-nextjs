import Link from "next/link";

export function  UsersTable({usersList}){
    return <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {
          usersList.map((user) => (
            <tr className="bg-base-200" key={user?.id}>
              <th>
                <Link href={'/users/' + user.id + '/'}>
                  {user.id}
                </Link>
              </th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
}