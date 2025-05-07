
import { FETCH_CHARACTER_FAILURE, FETCH_CHARACTER_REQUEST, FETCH_CHARACTER_SUCCESS } from "../actions/characterActions";


const initialState = {
    loadingCharacters: false,
    characters:[],
    error:""
};

export const characterReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTER_REQUEST:
            return {
                ...state,
                loadingCharacters: true,
            }
            case FETCH_CHARACTER_SUCCESS:
                return {
                    ...state,
                    loadingCharacters:false,
                    characters: action.payload,
                    error:"",
                }
            case FETCH_CHARACTER_FAILURE:
                return {
                    ...state,
                    loadingCharacters:false,
                    characters:[],
                    error:action.payload,
                }

            default:
                return state;
    }
};

export default characterReducer