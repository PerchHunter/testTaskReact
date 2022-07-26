import React, { useEffect, useState } from "react";

import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";

import {
  Box,
  Button,
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

export default observer(UsersTable);

function UsersTable({ convertDate, checkIndex }) {
  const [usersStore] = useStore("users");

  const {
    itemsUsers,
    page,
    limit,
    offset,
    updateOffset,
    updatePage,
    deleteUser,
  } = usersStore;

  const [curPage, setCurPage] = useState(page);

  const maxPagePagination = Math.ceil(itemsUsers.length / limit);

  useEffect(() => {
    updatePage(curPage);

    if (curPage > 1) updateOffset((curPage - 1) * limit);
    else if (curPage === 1) updateOffset(0);
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
              <TableCell>ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="center">Date of creation</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsUsers.map(
              (user, index) =>
                checkIndex(index, page, limit, offset) && (
                  <TableRow
                    key={user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user.id}
                    </TableCell>
                    <TableCell align="center">{user.name}</TableCell>
                    <TableCell align="center">{user.role}</TableCell>
                    <TableCell align="center">
                      {convertDate(user.ctime)}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {maxPagePagination ? (
        <Stack spacing={2} sx={{ mt: 3 }}>
          <Pagination
            count={maxPagePagination}
            page={curPage}
            onChange={(e, num) => setCurPage(num)}
            color="primary"
            sx={{ marginX: "auto" }}
          />
        </Stack>
      ) : null}
    </Box>
  );
}
