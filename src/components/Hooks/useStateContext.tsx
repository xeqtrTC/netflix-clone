
import { useContext } from "react";
import stateContextValue, { useStateContext } from "../context/stateContext";

const useStateValue = (): useStateContext => {
    return useContext(stateContextValue);
}

export default useStateValue;