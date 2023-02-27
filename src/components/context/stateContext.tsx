import { createContext, ReactElement, useState } from "react";
import { propsFetchData, statesForVideo } from "../Hooks/typeOfInterfaces";
import instance from "../netflixAPI/axios";
import { API_KEY } from "../netflixAPI/requests";

export type useStateContext = ReturnType<typeof stateContext>
const initStateContext: useStateContext = {
    searchStateValue: false,
    setSearchStateValue: () => { },
    forVideo: ({ videoId: '', description: '', title: '' }),
    load: false,
    setLoad: () => { },
    fetchSecondData: ({id, title, overview}: propsFetchData) => ({} as any), 
    errorValue: false,
    setLoadAndVideo: () => {}
}
const stateContext = () => {
    const [searchStateValue, setSearchStateValue] = useState<boolean>(false);
    const [load, setLoad] = useState<boolean>();
    const [errorValue, setErrorValue] = useState<boolean>(false)
    const [forVideo, setForVideo] = useState<statesForVideo>({
        videoId: '',
        description: '',
        title: ''
    });

    const setLoadAndVideo = () => {
        setForVideo({
            videoId: '',
            description: '',
            title: ''
        })
        setLoad(false);
    }

    const fetchSecondData = async ({ id, title, overview }: propsFetchData ) => {

        try {
            const { data } = await instance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
            console.log(data);
            console.log(title);
            setForVideo({
                videoId: data.results.length > 0 ? data.results[0].key : undefined,
                title: title ? title : "Unknown title",
                description: overview
            })
            setLoad(true);

        } catch (error: any) {
            setErrorValue(true)
            setLoad(true);
        }
    }

    return { searchStateValue, setSearchStateValue, fetchSecondData, forVideo, load, setLoad, errorValue, setLoadAndVideo }
}

const stateContextValue = createContext<useStateContext>(initStateContext);
type ChildrenType = { children?: ReactElement | ReactElement[] }

export const StateProvider = ({ children }: ChildrenType): ReactElement => {
    return (
        <stateContextValue.Provider value={stateContext()}>
            {children}
        </stateContextValue.Provider>
    )
}

export default stateContextValue