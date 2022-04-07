import React from "react";
import { ProductItem } from "./ProductItem";
import { IProduct } from "../types/data";
import styled from "styled-components";

const ProductListEl = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

interface IProductList {
  list: IProduct[];
}

const ProductList: React.FC<IProductList> = (props) => {
  return (
    <ProductListEl>
      {props.list.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ProductListEl>
  );
};

export { ProductList };
