import React, { useRef, useMemo, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BuyTable from "../components/BuyTable";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface IDepth {
  stream: string;
  data: {
    e: string;
    E: any;
    s: string;
    U: any;
    u: any;
    b: string[][];
    a: string[][];
  };
}
export default function AutoGrid() {
  const socketUrl = "wss://stream.binance.com:9443/stream";

  const { sendJsonMessage, lastJsonMessage, readyState } =
    useWebSocket<any>(socketUrl);

  const messageHistory = useRef<IDepth[]>([]);

  messageHistory.current = useMemo(
    () => messageHistory.current.concat(lastJsonMessage ?? []),
    [lastJsonMessage]
  );

  const handleClickSendMessage = useCallback(
    () =>
      sendJsonMessage({
        method: "SUBSCRIBE",
        params: ["btcusdt@depth" as any],
        id: 1,
      }),
    [sendJsonMessage]
  );

  useEffect(() => {
    handleClickSendMessage();
  }, []);

  const handleClickUnSendMessage = useCallback(
    () =>
      sendJsonMessage({
        method: "UNSUBSCRIBE",
        params: ["btcusdt@depth" as any],
        id: 1,
      }),
    [sendJsonMessage]
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  const formattedData = {
    asks: (lastJsonMessage as IDepth)?.data?.a.map(([price, amount]) => ({
      amount,
      price,
      total: "176.92844",
    })),
    bids: (lastJsonMessage as IDepth)?.data?.b.map(([price, amount]) => ({
      amount,
      price,
      total: "176.92844",
    })),
  };

  return (
    <Box sx={{ flexGrow: 1, padding: "16px" }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <BuyTable data={formattedData.asks} />
          <BuyTable data={formattedData.bids} />
        </Grid>
        <Grid item xs={6}>
          Trade Placeholder
        </Grid>
        <Grid item xs>
          Trade INPUT
        </Grid>
      </Grid>
    </Box>
  );
}
