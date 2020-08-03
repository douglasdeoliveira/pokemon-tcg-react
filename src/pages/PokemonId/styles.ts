import styled from 'styled-components';

export const Container = styled.main`
  .card__image {
    margin-bottom: 24px;
  }

  .card__info {
    margin-bottom: 24px;

    > p {
      font-size: 16px;

      + p {
        margin-top: 8px;
      }
    }
  }
`;

export const TableContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-top: 16px;

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;

    caption {
      border-radius: 5px 5px 0 0;
      color: #fff;
      font-weight: 700;
      padding: 8px;
      text-transform: uppercase;
    }

    thead {
      border-bottom: 1px solid rgba(224, 224, 224, 1);

      th {
        font-weight: 700;
        padding: 16px;
        text-align: left;

        &:nth-child(4) {
          width: 18%;
        }
      }
    }

    thead,
    tbody {
      tr {
        color: inherit;
        outline: 0;
        vertical-align: middle;

        + tr {
          border-top: 1px solid rgba(224, 224, 224, 1);
        }

        td {
          color: #333;
          padding: 16px;
        }
      }
    }
  }

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    caption {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      left: -9999px;
      position: absolute;
      top: -9999px;
    }

    tr:nth-child(even) {
      background: #eee;
    }

    td {
      /* Behave  like a "row" */
      border: 0;
      border-bottom: 1px solid #e0e0e0;
      min-height: 33px;
      padding: 8px !important;
      padding-left: 50% !important;
      position: relative;
    }

    td::before {
      font-weight: 700;
      left: 6px;
      padding-right: 10px;
      position: absolute;
      white-space: nowrap;
      width: 45%;
    }

    td:nth-of-type(1)::before {
      content: attr(data-title);
    }

    td:nth-of-type(2)::before {
      content: attr(data-title);
    }

    td:nth-of-type(3)::before {
      content: attr(data-title);
    }

    td:nth-of-type(4)::before {
      content: attr(data-title);
    }
  }
`;

export const BackButton = styled.button`
  background: #e0e0e0;
  border: 0;
  border-radius: 5px;
  color: #333;
  font-weight: 600;
  margin-bottom: 24px;
  padding: 8px 16px;
  text-transform: uppercase;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background: #bdbdbd;
  }
`;
