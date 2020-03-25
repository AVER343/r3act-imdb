import React from 'react';


import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  PreviewContainer
} from './collection.styles';
import isExisting from '../collection-item/collection-item-utils';
import { createStructuredSelector } from 'reselect';
import { getFavourites } from '../../redux/favourites/favourites.selectors';
import { connect } from 'react-redux';
const CollectionPreview = ({ Search,favourites}) => {
  return(<CollectionPreviewContainer>
      <PreviewContainer>
      {Search
        .filter((item, idx) => idx < 4)
        .map(element => (
            <CollectionItem functionality={isExisting(favourites,element)} key={`${element.imdbID}.${Math.random()}`} item={element} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
)}
const mapToState=createStructuredSelector({
  favourites:getFavourites
})
export default connect(mapToState)(CollectionPreview)
