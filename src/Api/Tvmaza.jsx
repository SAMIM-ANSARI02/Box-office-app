
const BASE_URL="https://api.tvmaze.com"

const apiGet=async(querryString)=>{
    // throw new Error("oops! something bad happened")
    const response=await fetch(`${BASE_URL}${querryString}`)
    const body=await response.json();
    return body

}
export const searchForShow=(qurry)=>apiGet(`/search/shows?q=${qurry}`)
export const searchForpeople=(qurry)=>apiGet(`/search/people?q=${qurry}`)
export const getShowId=(showId)=>apiGet(`/shows/${showId}`)

