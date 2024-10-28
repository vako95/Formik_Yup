import RegisterSchema from "../schemas/auth/RegisterSchema";
import "./Register.css";
import {useFormik} from "formik"
const Register = () => {

    const formikSubmit = (values,action) => {
        setTimeout(() => {
  action.resetForm();
        },2000)
    }


const {errors,values,handleChange,handleSubmit}  = useFormik({
initialValues: {
    email: "",
    username: "",
    age:"",
    password:"",
    confirm_password:"",
    term:false
},
validationSchema: RegisterSchema,
validateOnChange:false,
validateOnBlur:false,
onSubmit:formikSubmit
});

console.log(errors);
    return (
        <article className="register">
                <h1 className="register__heading-title">Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form_group">
                    <label htmlFor="email">Email
                    {errors.email && (
                        <p>*{errors.email}</p>
                    )}
                    </label>
                    <input type="email" id="email" onChange={handleChange} value={values.email}/>
                    </div>

                    <div className="form_group">
                    <label htmlFor="username">
                        Username
                       {errors.username && (
                        <p>*{errors.username}</p>
                       )}
                    </label>
                    <input type="text" id="username" onChange={handleChange} value={values.username}/>
                    </div>
              

                     <div className="form_group">
                     <label htmlFor="age">
                        Age
                        {errors.age && (
                        <p>*{errors.age}</p>
                       )}
                     </label>
                    <input type="number" id="age" onChange={handleChange} value={values.age}/>
                    </div>

                     <div className="form_group">
                        <label htmlFor="password">
                            Pasword
                            {errors.password && (
                        <p>*{errors.password}</p>
                       )}
                            </label>
                    <input type="text" id="password" onChange={handleChange} value={values.password}/>

                    </div>
                     <div className="form_group">
                     <label htmlFor="confirm_password">
                        Confirm Pasword
                        {errors.confirm_password && (
                        <p className="form__error">*{errors.confirm_password}</p>
                        )}
                        </label>
                    <input type="text" id="confirm_password" onChange={handleChange} value={values.confirm_password}/>

                    </div>
                     <div className="form_group">
                    <label htmlFor="term">
                        Term
                        
                    <input type="checkbox" id="term" onChange={handleChange} value={values.term}/>
                 
                    </label>
                    {errors.term && (
                        <p className="form__error">*{errors.term}</p>
                        )}
                    </div>
               <div className="form_group">
               <button className="button" type="submit">Send</button>
               </div>
              
                </form>
       
        </article>


    );
}

export default Register;