import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email address").required("Email is required"),

    username: Yup.string()
        .min(2, "Username must be at least 2 characters")
        .max(15, "Username cannot exceed 15 characters")
        .required("Please enter a username"),

    age: Yup.number().positive("Age must be a positive number")
        .integer("Age must be a whole number")
        .required("Please enter your age"),

    password: Yup.string().required("Password is required"),

    confirm_password: Yup.string()
        .required("Passwords must match")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),

    term: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

export default RegisterSchema;