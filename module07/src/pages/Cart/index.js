import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>PRODUCT NAME</th>
            <th>QUANTITY</th>
            <th>SUB-TOTAL</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://pbs.twimg.com/media/EbzjpdTUEAEkcA_?format=jpg&name=small"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>PRODUCT TITLE</strong>
              <span>200,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 400,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Submit Order</button>
        <Total>
          <span>TOTAL</span>
          <strong>200,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
