const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = 'https://api.themoviedb.org/3'

const endPoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
    trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`
}

export function createImageUrl(fileName, size) {
    return `https://image.tmdb.org/t/p/${size}/${fileName}`
}

export default endPoints;