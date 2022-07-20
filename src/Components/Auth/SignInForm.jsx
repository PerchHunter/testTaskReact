import React from "react";

import * as Yup from "yup";
import { useFormik } from "formik";

import { Box, TextField, Button, Typography } from "@mui/material";

export default function SignInForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address"),
      password: Yup.string()
        .trim()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
          message: "At least 8 characters, at least one uppercase letter",
          excludeEmptyString: true,
        }),
    }),

    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
    },
  });

  const stylesForm = {
    width: "400px",
    display: "block",
    m: "10% auto 0",
    color: "#FFFFFF",
  };

  const stylesInput = {
    mb: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: "5px",
  };

  const errorMessage = { color: "rgb(211, 47, 47)" };

  const stylesButton = { display: "block", marginX: "auto" };

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={stylesForm}>
      <Typography variant="h5" component="h5" textAlign="center">
        Authorization
      </Typography>
      <div>
        <label for="outlined-required">Email</label>
        <TextField
          required
          id="outlined-required"
          sx={stylesInput}
          fullWidth
          autoFocus
          error={!!formik.errors.email}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={errorMessage}>{formik.errors.email}</div>
        ) : null}

        <label for="outlined-password-input">Password</label>
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
          <div style={errorMessage}>{formik.errors.password}</div>
        ) : null}
      </div>
      <Button variant="contained" type="submit" sx={stylesButton}>
        Authorization
      </Button>
    </Box>
  );
}
