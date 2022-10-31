import React, {useEffect, useContext, useReducer } from "react";
import { reducer } from "./reducer";    
const AppContext = React.createContext();

const API = "https://hn.algolia.com/api/v1/search?";
const initalState = {
    isLoading: true,
    query: "css",
    nbPages: 0,
    page: 0,
    hits: [],
}

const AppProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initalState);
    

    const fetchApiData = async (url) => {
        dispatch({type:"SET_LOADING"})
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            });
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
    },[state.query,state.page])

    // to remove the post
    const removePost = (id) => {
        dispatch({type:"REMOVE_POST",payload: id})
    }

    // to search
    const searchPost = (e) => {
        dispatch({type:"SEARCH_QUERY",payload: e})
    }

    // prev and next fun
    const getPrevPage = () => {
        dispatch({type: "PREV_PAGE"})
    }
    const getNextPage = () => {
        dispatch({type: "NEXT_PAGE"})
    }




    return <AppContext.Provider value={{...state,removePost,searchPost,getPrevPage,getNextPage}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};