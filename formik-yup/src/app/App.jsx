import Register from "../components/Register/Register.jsx";
import FormikRegister from "../components/common/FormikRegister/FormikRegister.jsx";

import Section from "../components/common/Section/Section.jsx";
import "./App.css"

 function App (){

return(
    <div className="app">
        <Section>
     <FormikRegister>
        <Register />
     </FormikRegister>
         
         
        </Section>

    </div>
);

}

export default App;