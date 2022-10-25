import { Typography } from "@mui/material";
import { useId } from "react";

import {
  Container,
  Header,
  OrderList,
  OrderListPrice,
  OrderListAmount,
  OrderListTotal,
} from "./styles";

interface IBuyTableData {
  amount: string;
  price: string;
  total: string;
}
interface IBuyTable {
  data?: IBuyTableData[];
}

const BuyTable: React.FC<IBuyTable> = ({ data }) => {
  const orderListKeyId = useId();
  return (
    <Container>
      <Header>
        <Typography component="div">Price(USDT)</Typography>
        <Typography component="div">Amount(BTC)</Typography>
        <Typography component="div">Total</Typography>
      </Header>
      {data?.map(({ amount, price, total }, index) => (
        <OrderList
          key={`${orderListKeyId}-${price}-${Math.random() + index * 100}`}
        >
          <OrderListPrice>{price}</OrderListPrice>
          <OrderListAmount>{amount}</OrderListAmount>
          <OrderListTotal>{total}</OrderListTotal>
        </OrderList>
      ))}
    </Container>
  );
};

export default BuyTable;
