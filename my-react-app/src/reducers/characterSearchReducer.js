
import { SEARCH_CHARACTER_FAILURE, SEARCH_CHARACTER_REQUEST, SEARCH_CHARACTER_SUCCESS } from "../actions/characterSearchActions"

const initialState = {
    loadingSearchResults:false,
    searchResults: [],
    error:"",
}

export const characterSearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_CHARACTER_REQUEST:
            return {
                ...state,
                loadingSearchResults: true,
            }
        case SEARCH_CHARACTER_SUCCESS:
            return {
                ...state,
                loadingSearchResults: false,
                searchResults: action.payload,
                error: "",
            }
        case SEARCH_CHARACTER_FAILURE:
            return {
                ...state,
                loadingSearchResults: false,
                searchResults: [],
                error: action.payload,
            }

            default:
                return state
    }
}

export default characterSearchReducer