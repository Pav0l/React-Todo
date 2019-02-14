import React from 'react';
import styled from 'styled-components';

export default function SearchForm({ searchInput, searchHandler  }) {
  return (
    

      <StyledInput
          type="text"
          placeholder="Search to-do list"
          value={searchInput}
          onChange={() => searchHandler()}
        />
    

  );
}

const StyledInput = styled.input`
  padding: 15px 10px;
  border-radius: 4px;
  border: 1px solid #0A4958;
  text-align: center;
  max-width: 500px;
  width: 50%;
  margin-top: 3rem;
`;