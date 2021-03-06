import React from 'react';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  NameContainer,
} from './collection-styles.styles';
import './collection.styles.scss'
import { connect } from 'react-redux';
import { ADD_FAVOURITE ,DELETE_FAVOURITE} from '../../redux/favourites/favourites.actions';
import { createStructuredSelector } from 'reselect';
import { getFavourites } from '../../redux/favourites/favourites.selectors';
import isExisting from './collection-item-utils';
const CollectionItem = ({favourites,functionality,item,ADD_FAVOURITE,DELETE_FAVOURITE}) => {
 return (
    <CollectionItemContainer>
  <div
      className='image'
      style={{
        backgroundImage: `url(${item.Poster})`
      }}
      alt='Poster'
    />
      <CollectionFooterContainer>
    <NameContainer>{item.Title}({item.Year})</NameContainer>
      </CollectionFooterContainer>
        {isExisting(favourites,item)?<AddButton  onClick={()=>{
                functionality=false
              DELETE_FAVOURITE(item)}} inverted >
                  DELETE FROM FAVOURITES
      </AddButton>:
      <AddButton  onClick={()=>{
        functionality=true
        ADD_FAVOURITE(item)}} inverted >
                  ADD TO FAVOURITES
      </AddButton>}
    </CollectionItemContainer>
  );
};
const mapDispatchToProp=(dispatch)=>({
  ADD_FAVOURITE: item => dispatch(ADD_FAVOURITE(item)),
  DELETE_FAVOURITE:item=>dispatch(DELETE_FAVOURITE(item))
})
const mapStateToProps=createStructuredSelector({
  favourites:getFavourites
})
export default connect(mapStateToProps,mapDispatchToProp)(CollectionItem)
