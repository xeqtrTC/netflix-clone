import searchState from "../Hooks/searchState";
import Search from "../Search/Search";
import { AiOutlineSearch } from 'react-icons/ai'
import useStateValue from "../Hooks/useStateContext";
import { Link } from "react-router-dom";

const Header = () => {
    // const [searchStateValue, setSearchStateValue] = searchState();
    const { searchStateValue, setSearchStateValue } = useStateValue()
    let searchButton = null;
    if(searchStateValue) {
        searchButton = (
            <Search />
        )
    }
    const combinedButton = (
        <>
        {searchButton}
        </>
    )

    return (
        <>
        {combinedButton}
        <div className='w-[95%] py-[15px] m-auto flex justify-between items-center'>
            <div>
                <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
                    className='h-20 object-cover' />
            </div>
            <div className="flex space-x-10 items-center">
                <div>
                    <AiOutlineSearch onClick={() => setSearchStateValue(true)} className="text-[#333333] h-6 w-6 cursor-pointer hover:scale-110 transition-all ease-out duration-200" />
                </div>
                <Link to='/signup' className="text-[#333333] hover:underline cursor-pointer font-medium text-xl">Signup</Link>
            </div>
        </div>
        </>
    )
}

export default Header;