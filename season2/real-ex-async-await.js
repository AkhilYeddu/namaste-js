// An async function returns a Promise so that whoever calls it has a reliable way to know when the function has finished and what result (or error) it produced.
// An async function returns a Promise because its work may finish in the future, and the Promise represents the eventual completion (or failure) of that function
// "An async function returns a Promise that represents the eventual completion (or failure) of that function."
const API_URL = "https://api.github.com/users/AkhilYeddu"


async function handlePromise(){

    try{
    const response = await fetch(API_URL);
    const data = await response.json()
    console.log(data)

    }catch(err){
        console.log(err)
    }
    

}

handlePromise();