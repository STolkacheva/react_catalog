import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { IProduct } from "../types/data";
import { ProductList } from "./ProductList";
import { Toolbar } from "./Toolbar";

const Container = styled.div`
  max-width: 1350px;
  margin: 0 5%;
  min-width: 300px;

  @media (min-width: 1200px) and (max-width: 1420px) {
    max-width: 1200px;
    margin: 0 10%;
  }
  @media (min-width: 1080px) and (max-width: 1199px) {
    max-width: 1200px;
    margin: 0 5%;
  }
  @media (min-width: 920px) and (max-width: 1079px) {
    max-width: 800px;
    margin: 0 15%;
  }
  @media (min-width: 820px) and (max-width: 919px) {
    max-width: 800px;
    margin: 0 10%;
  }
  @media (min-width: 720px) and (max-width: 819px) {
    max-width: 800px;
    margin: 0 5%;
  }
  @media (max-width: 719px) {
    max-width: 320px;
    margin: 0 auto;
  }
`;

const Header = styled.div`
  margin-bottom: 10px;

  & > h1 {
    color: var(--black);
    font-weight: var(--fw-bold);
    font-size: var(--fs-xl);
    line-height: 100%;
  }
`;

const App: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const filters = ["All", "В наличии"];
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    if (selected === "All") {
      loadData();
    } else {
      setProducts(products.filter((item) => item.quantity > 0));
    }
  }, [selected]);

  const loadData = () => {
    fetch("https://artisant.io/api/products")
      .then((response) => response.json())
      .then((skus) => {
        return skus.data.products.map((product: any) => {
          return {
            id: product.product_id,
            title: product.name,
            price: product.initial_price,
            currency: "ETH",
            quantity: product.quantity_available,
            created_by: product.created_by.display_name,
          };
        });
      })
      .then((result) => setProducts(result));
  };

  const onSelectFilter = (filter: string) => {
    setSelected(filter);
  };

  return (
    <Container>
      <Header>
        <h1>Explore</h1>
        <p>Buy and sell digital fashion NFT art</p>
      </Header>
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProductList list={products} />
    </Container>
  );
};

export { App };
