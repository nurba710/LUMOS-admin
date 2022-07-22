import React from 'react';
import {SpinnerType} from './LoaderType';
import {Spinner} from './LoaderStyle';


const Loader: React.FC<Partial<SpinnerType>> = ({
                                           borderInner= '2px solid cornflowerblue',
                                           borderSpin = '4px solid blue',
                                           width = '140px',
                                           height= '140px',
                                       }) => {
    return <Spinner width={width} height={height} borderInner={borderInner} borderSpin={borderSpin}/>;
};
export default Loader;