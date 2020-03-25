import ACTION_TYPES from "./favourites.action.types"
import { addToFavourites,deleteFromFavourites}  from "./favourites.utils"

const INITIAL_STATE = {
    favourites:[]
}
 const favouriteReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ACTION_TYPES.ADD_FAVOURITES:
            return { ...state,favourites:addToFavourites(state.favourites,action.payload)}
        case ACTION_TYPES.DELETE_FAVOURITES:
            return { ...state,favourites:deleteFromFavourites(state.favourites,action.payload)}
        case (ACTION_TYPES.DELETE_ALL):
            return{
            favourites:[]
            }
        default :
            return state
        }
}
export default favouriteReducer