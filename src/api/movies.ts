

const baseUrl = "https://api.themoviedb.org/3"


export  const getMoviesBySearchText = async (searchText: string) => {
    const movies = fetch(baseUrl + `/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, {
        headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
        }
    })
    
    const responseMovies: any = (await movies).json()
    return responseMovies;
}