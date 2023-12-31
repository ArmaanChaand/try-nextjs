export async function getUser(userID) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + userID)
   
    if (!res.ok) {
      // throw new Error('Failed to fetch data')
      return undefined
    }
   
    return res.json()
  }