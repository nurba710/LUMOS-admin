import React from 'react';
import {SpinnerType} from "./LoaderType";
import {Spinner} from "./LoaderStyle";



const Loader: React.FC<SpinnerType> = () => {
    return <Spinner width='140px' height='140px'/>;
};
export default Loader;