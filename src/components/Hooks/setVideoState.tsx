import { useState } from "react"



const setVideoState = () => {
    
    
    const [load, setLoad] = useState<boolean>(false);

    return [load, setLoad] as const
    
}

export default setVideoState