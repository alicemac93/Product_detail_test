import ProductAdd from '../ProductAdd.js'
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

test('should be able to increase and decrease product quantity', async () => {
  const product = {
    name: "light bulb",
    id: 2,
    price: 15,
    quantity: 2
  }

  const { getByTestId } = render(<ProductAdd product={product} />);
  const quantity = getByTestId('product-quantity');

  fireEvent.click(getByTestId("increment-button"))
  expect(quantity).toHaveTextContent(2);

  fireEvent.click(getByTestId("decrement-button"))
  expect(quantity).toHaveTextContent(1);

  // testing that I cant go below 1 with the quantity
  fireEvent.click(getByTestId("decrement-button"))
  expect(quantity).toHaveTextContent(1);
});

test('should be able to add items to the basket', async () => {
  const product = {
    name: "light bulb",
    id: 2,
    price: 15,
    quantity: 2
  };

  const setState = jest.fn();
  const useStateSpy = jest
    .spyOn(React, 'useState')
    .mockImplementation(initialState => [initialState, setState]);

  const { getByTestId } = render(<ProductAdd product={product} />);

  fireEvent.click(getByTestId('cart-add'));

  expect(setState).toBeCalledWith(product);
});
