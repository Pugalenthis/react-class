import { useFormik } from "formik";
import * as yup from "yup";

const formvalidationschema=yup.object({
   email : yup.string().required("please enter a email field"),
   password : yup.string().required("please enter a password field").min(8,"need a longer password").max(12,"too much password")

})
export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "abc@gmail.com", password: "abc" },
    validationSchema :formvalidationschema,
    onSubmit : (values)=>{
      console.log("onSubmit",values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="email"
        placeholder="enter email"
      ></input><br></br>
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}

      <input
        id="password"
        name="password"
        value={formik.values.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="password"
       
        placeholder="enter password"
      ></input>
      {formik.touched.password && formik.errors.password ? formik.errors.password : ""}<br></br>
      
      <button type="submit">Submit</button>
    </form>
  );
}
