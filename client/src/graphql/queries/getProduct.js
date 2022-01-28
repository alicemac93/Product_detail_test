import { gql } from '@apollo/client';

// should the product ID be dynamic?
export const GET_PRODUCT = gql`
  query getProductById {
    product(productId: 1) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      modelCode
      colour
      imgUrl
    }
  }
`