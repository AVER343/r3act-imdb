import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,

} from './checkout.styles';
import { getFavourites } from '../../redux/favourites/favourites.selectors';
import CheckoutItem from '../checkout-item/checkout-item.component'
const CheckoutPage = ({ favourites }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Year</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>    Type</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {favourites.map(item => (
      <CheckoutItem key={item.imdbID} item={item} />
    ))}
    <TotalContainer>TOTAL:</TotalContainer>
    
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
favourites:getFavourites
});

export default connect(mapStateToProps)(CheckoutPage);
