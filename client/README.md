# Product_detail_test

The product detail is located in the main app, it is dvided into smaller components, which could be reused.
The available product is in a /productDetail/id route, since I am expecting there to be more products and they are part of larger app.

The data is retrieved with Apollo clien and located in separate file, potentially there could be a custom hook created to retrieve the product(s).

The cart value is currently held in a state of the App where it is passed to the product detail component. The state of cart would in real life
be probably kept somewhere else, for example in a redux state as per
https://github.com/alicemac93/redux-eshop/blob/master/src/features/Cart/selectedProductsSlice.js

