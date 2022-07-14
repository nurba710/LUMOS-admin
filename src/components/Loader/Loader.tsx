import React from 'react';
import {SpinnerType} from "./LoaderType";
import {Spinner} from "./LoaderStyle";



const Loader: React.FC<SpinnerType> = ({width, height}) => {
    return <Spinner width={width} height={height}/>;
};
export default Loader;