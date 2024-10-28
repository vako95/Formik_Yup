import { useFormik } from "formik";
import LoginSchema from "../schemas/auth/LoginSchema";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Login.css";
import "../../index.css"

const Login = () => {
const recaptchaRef = useRef(null);

const loginSubmit = (values,action) => {
    setTimeout(() => {
        action.resetForm();
        if (recaptchaRef.current) 
            recaptchaRef.current.reset();
        
    },2000);
    
}

    const { errors, values,setFieldValue, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email_username: "",
            password: "",
            captcha: ""
        },
        validationSchema: LoginSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: loginSubmit
    });

    const onChange = (value) => {
        if (value.startsWith("03")) {
            console.log("grecaptcha:", value);
            setFieldValue("grecaptcha", value);
        }
    }
    return (
        <article className="register">
            <h1 className="register__heading-title">Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className="form_group">
                    <label htmlFor="email_username">Email/Username</label>
                    <input 
                        type="text" 
                        id="email_username" 
                        onChange={handleChange} 
                        value={values.email_username} 
                    />
                    {errors.email_username && (
                        <p className="form__error">*{errors.email_username}</p>
                    )}
                </div>
                <div className="form_group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        onChange={handleChange} 
                        value={values.password} 
                    />
                    {errors.password && (
                        <p className="form__error">*{errors.password}</p>
                    )}
                </div>
                <div className="form__group-recaptcha">
                {errors.captcha && (
                        <p className="form__error">*{errors.captcha}</p>
                    )}
                <ReCAPTCHA
                ref={recaptchaRef}
    sitekey="6Lez7m4qAAAAAHZeIEW30Usdc_6dE_pGtwgaKbbx"
    onChange={onChange}
  />
                </div>
                <div className="form_group">
                    <button className="button" type="submit">Send</button>
                </div>
            </form>
        </article>
    );
}

export default Login;
