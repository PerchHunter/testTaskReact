import React from "react";

import "./css/styles.css";

import useFormikLibrary from "../../hooks/useFormikLibrary";

import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

const stylesForm = {
  width: "400px",
  display: "block",
  m: "10% auto 0",
  color: "#FFFFFF",
  position: "relative",
};

const stylesInput = {
  mb: 2,
  backgroundColor: "#FFFFFF",
  borderRadius: "5px",
};

export default function SignInForm() {
  const formik = useFormikLibrary();

  return (
    <>
      <Box component="form" onSubmit={formik.handleSubmit} sx={stylesForm}>
        <Typography variant="h5" component="h5" textAlign="center">
          Authorization
        </Typography>
        <div>
          <label htmlFor="outlined-required">Email</label>
          <TextField
            disabled={formik.isSubmitting}
            required
            id="outlined-required"
            sx={stylesInput}
            fullWidth
            autoFocus
            error={!!formik.errors.email}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="errorMessage">{formik.errors.email}</div>
          ) : null}

          <label htmlFor="outlined-password-input">Password</label>
          <TextField
            required
            id="outlined-password-input"
            type="password"
            sx={stylesInput}
            fullWidth
            error={!!formik.errors.password}
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="errorMessage">{formik.errors.password}</div>
          ) : null}
        </div>
        <Button
          disabled={formik.isSubmitting}
          variant="contained"
          type="submit"
        >
          Authorization
        </Button>
        {formik.isSubmitting && (
          <Box sx={{ position: "absolute", top: "45%", left: "45%" }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </>
  );
}
