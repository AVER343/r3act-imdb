import React from 'react'
import { getFavourites } from '../../redux/favourites/favourites.selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import CheckoutPage from '../../components/checkout/checkout.component'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
const FavouritesPage=({favourites})=>{
    favourites=fourItemPairs(favourites)
return(
    <div>
       {/* {favourites?favourites.map(element=><CollectionPreview Search={element}/>):null}   */}
       <CheckoutPage ></CheckoutPage>
    </div>
)}
const mapStateToProps=createStructuredSelector({
favourites:getFavourites
})
export const fourItemPairs = (Search)=>{
    var newSearch=[]
   var condition=(Search.length/4)
    var i,end=4,j
    for(j=0;j<Math.round( condition + 0.4 );j++)
    {
      var start=end-4
       for(i=0;i<4;i++)
       {   
          newSearch[j] = new Array(...Search.slice(start,end))
       }
       end=end+4;  
    }
    return newSearch
 }

 
export default connect(mapStateToProps)(FavouritesPage)