import { createSelector } from 'reselect';

export const selectFavourite = state => state.favourites;
export const getFavourites=createSelector([selectFavourite],
    favourites=>favourites.favourites)
 
