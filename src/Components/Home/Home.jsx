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

  const [usersStore] = useStore("users", "events");
  const { itemsUsers } = usersStore;

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
            <UsersTable />
          </Grid>
          <Grid item xs={6}>
            <EventsTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
