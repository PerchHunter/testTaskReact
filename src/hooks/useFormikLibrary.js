import { useNavigate } from "react-router-dom";

import useStore from "./useStore";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function () {
  const [authStore] = useStore("auth");
  const { setAuth } = authStore;

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address"),
      password: Yup.string()
        .trim()
        .matches(/^(?=.*[A-Z])[a-zA-Z\d]{8,}$/, {
          message: "At least 8 characters, at least one uppercase letter",
          excludeEmptyString: true,
        }),
    }),

    onSubmit: (values, { setSubmitting }) => {
      if (!formik.isValidating) {
        setTimeout(() => {
          setSubmitting(false);
          setAuth(true);
          navigate("/", { replace: true });
        }, 2000);
      }
    },
  });

  return formik;
}
