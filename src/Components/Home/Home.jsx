import React from "react";

import Header from "../Others/Header.jsx";
import LineProgress from "../Others/LineProgress.jsx";
import UsersTable from "./UsersTable.jsx";
import EventsTable from "./EventsTable.jsx";

import useWindowSize from "../../hooks/useWindowSize.js";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";

import { Container, Grid } from "@mui/material";

export default observer(Home);

function Home() {
  const size = useWindowSize();

  const [usersStore] = useStore("users");
  const { itemsUsers } = usersStore;

  function convertDate(timestamp) {
    const date = new Date(timestamp * 1000);
    let month = date.getMonth() + 1;

    if (month < 10) {
      month = "0" + month;
    }

    return `${date.getDate()}:${month}:${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }

  // проверяем, чтобы отображаемые строки были в границах смещения(offset) и (offset + limit)
  function checkIndex(index, page, limit, offset) {
    if (page === 1 && index < limit) return true;
    else if (page > 1 && offset <= index && index < offset + limit) return true;
    else return false;
  }

  return (
    <>
      <Header />
      {!itemsUsers && <LineProgress />}
      <Container fixed>
        <Grid
          container
          spacing={2}
          direction={size.width < 1200 ? "column" : "row"}
        >
          <Grid item xs={6} alignItems="center">
            <UsersTable convertDate={convertDate} checkIndex={checkIndex} />
          </Grid>
          <Grid item xs={6}>
            <EventsTable convertDate={convertDate} checkIndex={checkIndex} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
