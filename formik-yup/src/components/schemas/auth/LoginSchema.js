import * as yup from "yup";

const LoginSchema = yup.object().shape({
    email_username: yup
        .string()
        .required('Email or username is required.'),

    password: yup
        .string()
        .required("Password is required.")
        .min(8, "Password must be at least 8 characters long.")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .matches(/[0-9]/, "Password must contain at least one number."),

        captcha: yup.string()
        .required("Captcha is required.")
});

export default LoginSchema;
