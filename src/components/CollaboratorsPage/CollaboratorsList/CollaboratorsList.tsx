import React from 'react';
import {colleaguesAPI} from "../../../service/colleaguesService";
import Loader from "../../Loader/Loader";
import CollaboratorItem from "../CollaboratorItem/CollaboratorItem";

const CollaboratorsList: React.FC = () => {
    const {data: colleagues, error, isLoading} = colleaguesAPI.useFetchColleaguesQuery(5)
    return (
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap:'wrap'}}>
            {isLoading && <Loader width='140px'
                                  height='140px'/>}
            {error && <h1>Произошла ошибка</h1>}
            {colleagues && colleagues.map(colleague =>
                <CollaboratorItem colleague={colleague} key={colleague.userId}/>
          )}
        </div>
    );
};

export default CollaboratorsList;