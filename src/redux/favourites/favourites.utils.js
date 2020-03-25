export const addToFavourites =(favourites,itemToAdd)=>{
    favourites=favourites.filter(element=>element!==itemToAdd)
    favourites.push(itemToAdd)
    return favourites
}
export const deleteFromFavourites =(favourites,itemToDelete)=>{
   favourites=favourites.filter(element=>element!==itemToDelete)
   return favourites
}

   