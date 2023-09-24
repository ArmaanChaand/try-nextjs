export async function getUserPosts(userID) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userID, {next: {
      revalidate: 60
    }})
   
    if (!res.ok) {
      // throw new Error('Failed to fetch data')
      return undefined
    }
   
    return res.json()
  }