import {useState} from 'react';

import { useSelector,useDispatch } from 'react-redux'
import { actions } from "../redux/actions/index";

const InputBrowser = ({getPostsData}) => {
    const searchTags = useSelector((state) => state.searchTags.searchTags);
    const dispatch = useDispatch();
    const [changetag, setChangetag] = useState('');

    const removeTag = async (item) => {
        const removeItemFromArr = ( searchTags, item ) => {
            let i = searchTags.indexOf( item );
            searchTags.splice( i, 1 );
            return searchTags;
        }
        let newSearchTag = await removeItemFromArr( searchTags, item )
        await dispatch(actions.searchTags.addSearchTags({ searchTags:newSearchTag } ))
        getPostsData();
    }

    const inputChangetag = (e) => setChangetag(e.target.value);
    const insertTag = async(e) => {
        searchTags.push(changetag)
        setChangetag('')
        await dispatch(actions.searchTags.addSearchTags({ searchTags:searchTags } ))
        getPostsData();
    }

    return (
        <>
            <div className="grid col-4 col-md-2 col-sm-1">
                <input onChange={(e) => inputChangetag(e)} value={changetag} type="search" className="span-3 input" placeholder="Filtrar por tag"name="search"></input>
                <button onClick={() => insertTag()} className="bg-primary text-white">Buscar</button>            
                
            </div>
            <div className="group-span">
                { searchTags.length > 0 && searchTags.map((item, index) => <span key={index} className="span span-danger text-white">{item} 
                <button onClick={() => removeTag(item)} className="span-bt-close" title="Quitar Tag">x</button></span>) }
            </div>
        </>
    );
}

export default InputBrowser;

/**
 
 */