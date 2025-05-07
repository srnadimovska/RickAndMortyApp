
import { FETCH_CHARACTER_DETAIL_FAILURE, FETCH_CHARACTER_DETAIL_REQUEST, FETCH_CHARACTER_DETAIL_SUCCESS } from "../actions/characterDetailAction";

const initialState = {
    loadingCharacterDetail: false,
    characterDetail:null,
    error:"",
};

export const characterDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTER_DETAIL_REQUEST:
            return {
                ...state,
                loadingCharacterDetail:true,
            }
        case FETCH_CHARACTER_DETAIL_SUCCESS:
            return {
                ...state,
                loadingCharacterDetail:false,
                characterDetail:action.payload,
                error:"",
            }
        case FETCH_CHARACTER_DETAIL_FAILURE:
            return {
                ...state,
                loadingCharacterDetail:false,
                characterDetail:null,
                error:action.payload,
            }
            default:
                return state;
    }
}
export default characterDetailReducer