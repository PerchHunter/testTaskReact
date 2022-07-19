import React, { useEffect, useState } from "react";

import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";

import {
  Box,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default observer(EventsTable);

function EventsTable() {
  const limit = 5;
  const [curPage, setCurPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const [eventsStore] = useStore("events");
  const { eventsList } = eventsStore;

  const maxPagePagination = Math.ceil(eventsList.length / limit);

  function convertDate(timestamp) {
    const date = new Date(timestamp * 1000);
    let month = date.getMonth() + 1;

    if (month < 10) month = "0" + month;

    return `${date.getDate()}:${month}:${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }

  function checkIndex(index) {
    if (curPage === 1 && index < limit) return true;
    else if (curPage > 1 && offset <= index && index < offset + limit)
      return true;
    else return false;
  }

  useEffect(() => {
    setCurPage(curPage);

    if (curPage > 1) setOffset((curPage - 1) * limit);
    else if (curPage === 1) setOffset(0);
  }, [curPage]);

  return (
    <Box
      sx={{
        mt: 3,
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">№</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Event</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventsList.map(
              (eventItem, index) =>
                checkIndex(index) && (
                  <TableRow
                    key={eventItem.event}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">
                      {convertDate(eventItem.ctime)}
                    </TableCell>
                    <TableCell align="center">{eventItem.event}</TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {eventsList.length >= limit && (
        <Stack spacing={2} sx={{ mt: 3 }}>
          <Pagination
            count={maxPagePagination}
            page={curPage}
            onChange={(e, num) => setCurPage(num)}
            showFirstButton={maxPagePagination > 5}
            showLastButton={maxPagePagination > 5}
            color="primary"
            sx={{ marginX: "auto" }}
          />
        </Stack>
      )}
    </Box>
  );
}
