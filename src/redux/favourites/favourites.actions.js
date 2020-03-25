import ACTION_TYPES from "./favourites.action.types";

export const ADD_FAVOURITE=(element)=>({
    type:ACTION_TYPES.ADD_FAVOURITES,
    payload:element
})
export const DELETE_FAVOURITE=(element)=>({
    type:ACTION_TYPES.DELETE_FAVOURITES,
    payload:element
})
export const DELETE_ALL=()=>({
    type:ACTION_TYPES.DELETE_ALL
})