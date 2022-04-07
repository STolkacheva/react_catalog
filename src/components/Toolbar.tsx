import React from "react";
import styled from "styled-components";

const ToolbarEl = styled.div`
  display: flex;
  color: var(--grey);
  font-size: var(--fs-s);
  padding: 0;
  
  & > .selected {
    background-color: var(--grey);
    color: var(--white);
  }
`;
const Button = styled.button`
  list-style-type: none;
  margin: 0 2px;
  padding: 5px 12px;
  border: 1px solid var(--grey);
  :hover {
    opacity: 0.5;
  }
`;

interface IToolbar {
  filters: string[];
  selected: string;
  onSelectFilter: (name: string) => void;
}

const Toolbar: React.FC<IToolbar> = (props) => {
  const { filters, selected, onSelectFilter } = props;
  return (
    <ToolbarEl>
      {filters.map((filter) => {
        return (
          <Button
            className={filter === selected ? "selected" : ""}
            onClick={() => onSelectFilter(filter)}
            key={filter}
          >
            {filter}
          </Button>
        );
      })}
    </ToolbarEl>
  );
};

export { Toolbar };
