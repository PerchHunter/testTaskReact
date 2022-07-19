import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import Auth from "./Components/Auth/Auth.jsx";

import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline>
        <Box
          sx={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "#303B44",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Auth />} />
          </Routes>
        </Box>
      </CssBaseline>
    </BrowserRouter>
  );
}
