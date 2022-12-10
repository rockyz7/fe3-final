import React from "react";
import { useFormik } from "formik"
import * as yup from "yup"

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  document.querySelector(".form-sent").innerHTML = `<p>Thank you, ${values.name}! We'll contact you via email as soon as possible.</p>`
  actions.resetForm(); 
}

const Form = () => {

  const schema = yup.object({
    name: yup.string().min(5, "The name must contain 5 letters or more").required(),
    email: yup.string().email("Please enter a valid email").required()
  })

 const {values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting} = useFormik({
  initialValues: {
    name: "",
    email: ""
  },
  validationSchema: schema,
  onSubmit
 })

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input type="text" 
        name="name" 
        id="name" 
        value={values.name} 
        onChange={handleChange}
        placeholder="Your name" 
        onBlur={handleBlur}
        className={errors.name && touched.name ? "input-error" : ""} / > 
        {errors.name && touched.name && <p className="error">{errors.name}</p>}
        <label htmlFor="email"></label>
        <input type="email" 
        name="email" 
        id="email" 
        value={values.email} 
        onChange={handleChange}
        placeholder="Email"
        onBlur={handleBlur} 
        className={errors.email && touched.email ? "input-error" : ""} />
        
        {errors.email && touched.email && <p className="error">{errors.email}</p>}
        <button  disabled={isSubmitting} type="submit">Submit</button>
      </form>
      <div className="form-sent"></div>
    </div>
  );
};

export default Form;
