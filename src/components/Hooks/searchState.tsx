import { useState } from "react";

const searchState = () => {
    const [searchStateValue, setSearchStateValue] = useState<boolean>(false);

    return [searchStateValue, setSearchStateValue] as const
}

export default searchState