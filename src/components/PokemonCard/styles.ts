import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
  top: 0;
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    top: -4px;
  }

  a {
    color: #333;
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  .card__header {
    align-items: center;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    padding: 8px;

    img {
      width: 100%;
    }
  }

  .card__body {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    padding: 20px;

    p + p {
      margin-top: 8px;
    }
  }
`;
