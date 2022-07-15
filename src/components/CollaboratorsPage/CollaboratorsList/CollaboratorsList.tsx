import React from 'react';
import {colleaguesAPI} from "../../../service/colleaguesService";
import Loader from "../../Loader/Loader";
import CollaboratorItem from "../CollaboratorItem/CollaboratorItem";
import {Flex} from "./Style";

const CollaboratorsList: React.FC = () => {
    const {data: colleagues, isLoading} = colleaguesAPI.useFetchColleaguesQuery(5)
    return (
        <Flex>
            {isLoading && <Loader/>}
            {colleagues?.map(colleague =>
                <CollaboratorItem colleague={colleague} key={colleague.userId}/>
          )}
        </Flex>
    );
};

export default CollaboratorsList;