export const API_KEY = '3202d8917ea8f20c46ae4b797e91c719';


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionsMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanseMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumenatries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}




export default requests