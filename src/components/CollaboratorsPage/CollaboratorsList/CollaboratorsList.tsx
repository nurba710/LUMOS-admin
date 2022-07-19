import React, {useState} from 'react';
import {useFetchColleaguesQuery} from "../../../service/colleaguesService";
import Loader from "../../Loader/Loader";
import CollaboratorItem from "../CollaboratorItem/CollaboratorItem";
import {Flex} from "./Style";
import Pagination from "../../Pagination/Pagination";
import { colleagueType } from '../../../storeToolkit/Types';


const CollaboratorsList: React.FC = () => {
    const [page, setPage] = useState<number>()
    const {data, isLoading} = useFetchColleaguesQuery(page)
    const {colleagues, totalPages} = data || {}
    console.log(colleagues)
    return (
        <>
            <Flex>
                {isLoading && <Loader/>}
                {colleagues?.map((colleague:colleagueType) =>
                <CollaboratorItem colleague={colleague} key={colleague._id}/>
          )}
        </Flex>
        <Pagination setPage={setPage} totalPage={totalPages}/>
        </>
    );
};

export default CollaboratorsList;