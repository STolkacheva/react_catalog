import React from "react";
import { IProduct } from "../types/data";
import styled from "styled-components";

const ProductItemEl = styled.div`
  width: 305px;
  height: 480px;
  margin: 10px 10px 10px 0;
  box-shadow: 1px 5px 10px #a39e9e;
  border-radius: var(--radius)
  position: relative;
  background: var(--bg-item) no-repeat;    
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  & span {
    font-size: var(--fs-xs);
  }
`;
const ProductInfo = styled.div`
  margin: 15px;
  height: 370px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  color: var(--white);
`;
const ProductAutor = styled.div`
  display: flex;
  flex-flow: column;
`;
const AutorValue = styled.label`
  font-weight: var(--fw-bold);
  font-size: var(--fs-s);
`;
const ProductTitle = styled.label`
  font-size: var(--fs-l);
  max-height: 40px;
`;
const ProductPriceblock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;
const PriceblockQuantity = styled.div`
  display: flex;
  flex-flow: column;
`;
const PriceblockPrice = styled.div`
  text-align: right;
  display: flex;
  flex-flow: column;
`;
const QuantityValue = styled.label`
  font-weight: var(--fw-bold);
  font-size: var(--fs-m);
  color: var(--black);
`;
const PriceValue = styled.label`
  font-weight: var(--fw-bold);
  font-size: var(--fs-m);
  color: var(--blue);
`;

const ProductItem: React.FC<IProduct> = (props) => {
  const { title, price, currency, quantity, created_by } = props;
  return (
    <ProductItemEl>
      <ProductInfo>
        <ProductAutor>
          <span>created by</span>
          <AutorValue>{created_by}</AutorValue>
        </ProductAutor>
        <ProductTitle>{title}</ProductTitle>
      </ProductInfo>
      <ProductPriceblock>
        <PriceblockQuantity>
          <span>available</span>
          <QuantityValue>{quantity} of {quantity}</QuantityValue>
        </PriceblockQuantity>
        <PriceblockPrice>
          <span>price</span>
          <PriceValue>{price} {currency}</PriceValue>
        </PriceblockPrice>
      </ProductPriceblock>
    </ProductItemEl>
  );
};

export { ProductItem };
