import { propsForSearchMovie } from "../Hooks/typeOfInterfaces";

const SearchMovie = ({ backdrop_path, id, overview, poster_path, title, onclick }: propsForSearchMovie) => {

    const base_url:string = "https://image.tmdb.org/t/p/original/"

    return (
        <div className="flex  p-5 cursor-pointer hover:bg-white/20 transition-all ease-in-out duration-200" onClick={() => onclick({id, title, overview})}>
            <div>
                <img src={`${base_url}${poster_path}`} className="w-32 h-32 object-cover min-w-[10rem]" alt='photo supposed to here' />
            </div>
            <div className="px-5 flex flex-col">
                <span className="text-3xl ">{title}</span>
                <span className="font-md">{overview}</span>
            </div>
        </div>
    )

}

export default SearchMovie;