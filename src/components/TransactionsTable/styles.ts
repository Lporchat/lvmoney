import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      //quando for o primeiro filho era ter isso
      &:first-child {
        color: var(--text-title);
        border-radius: 0.8rem 0px 0px 0.8rem;
      }

      //quando for o ultimo filho era ter isso
      &:last-child {
        border-radius: 0px 0.8rem 0.8rem 0px;
      }

      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
