import axios from "axios"

export const FETCH_CHARACTER_DETAIL_REQUEST = "FETCH_CHARACTER_DETAIL_REQUEST"
export const FETCH_CHARACTER_DETAIL_SUCCESS = "FETCH_CHARACTER_DETAIL_SUCCESS"
export const FETCH_CHARACTER_DETAIL_FAILURE = "FETCH_CHARACTER_DETAIL_FAILURE"

export const fetchCharacterDetailRequest = () => ({
    type:FETCH_CHARACTER_DETAIL_REQUEST,
})

export const fetchCharacterDetailSuccess = (characterDetail) => ({
    type:FETCH_CHARACTER_DETAIL_SUCCESS,
    payload:characterDetail,
})

export const fetchCharacterDetailFailure = (error) => ({
    type:FETCH_CHARACTER_DETAIL_FAILURE,
    payload:error,
})

export const fetchCharacterDetail = (id) => {
    return(dispatch) => {
        dispatch(fetchCharacterDetailRequest())
        axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
            const detail = res.data;
            dispatch(fetchCharacterDetailSuccess(detail))
        })
        .catch((error) => {
            const errorMsg = error.message;
            dispatch(fetchCharacterDetailFailure(errorMsg))
        });
    };
};