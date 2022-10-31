export const reducer = (state, action) => {

    switch (action.type) {
        case "GET_STORIES":
            return {
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                isLoading: false
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            };
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((ele) => ele.objectID != action.payload)
            }
        case "SEARCH_QUERY":
            return {
                ...state,
                query: action.payload
            }
        case "NEXT_PAGE":
            return {
                ...state,
                page : state.page < state.nbPages ? state.page + 1 : state.page  
            }
        case "PREV_PAGE":
            return {
                ...state,
                page : state.page > 1 ? state.page - 1 : state.page  
            }
    }
    return state;
}