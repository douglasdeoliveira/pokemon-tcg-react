import styled from 'styled-components';

export const Search = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 20px 0;

  span {
    margin-right: 16px;
  }

  input {
    border: 0;
    border-radius: 5px;
    color: #333;
    flex: 1;
    max-width: 300px;
    padding: 8px 16px;
    width: 100%;

    &::placeholder {
      color: #ccc;
    }
  }

  @media (max-width: 528px) {
    input {
      margin-top: 8px;
      max-width: none;
    }
  }
`;
