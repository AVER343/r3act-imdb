import React from 'react';
import { connect } from 'react-redux';

import 
ACTION_TYPES
 from '../../redux/favourites/favourites.action.types';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';
import { DELETE_FAVOURITE, ADD_FAVOURITE } from '../../redux/favourites/favourites.actions';

const CheckoutItem = ({ item,ADD_FAVOURITE,DELETE_FAVOURITE }) => {
  const { Poster, Type, Title ,Year} = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={Poster} alt='item' />
      </ImageContainer>
      <TextContainer>{Title}</TextContainer>
      <TextContainer>{Year}</TextContainer>
      <TextContainer>{Type}</TextContainer>
      <RemoveButtonContainer onClick={() => DELETE_FAVOURITE(item)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );}

const mapDispatchToProps = dispatch => ({
ADD_FAVOURITE:item=>dispatch(ADD_FAVOURITE(item)),
DELETE_FAVOURITE:item=>dispatch(DELETE_FAVOURITE(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
