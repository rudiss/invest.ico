import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 16px;
  border: 1px solid rgb(31, 33, 36);
  max-width: 320px;
  max-height: 390px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 96px 96px 96px;
  color: rgb(132, 142, 156);

  div:last-child {
    display: flex;
    flex: 1 1 0%;
    justify-content: flex-end;
  }
`;

export const OrderList = styled.div`
  display: grid;
  grid-template-columns: 96px 96px 96px;
  line-height: 22px;
`;

export const OrderListPrice = styled.div``;
export const OrderListAmount = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
`;
export const OrderListTotal = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: flex-end;
`;
