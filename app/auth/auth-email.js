"use client"
import { TextField,Button } from "@mui/material"
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    passwordConfirmation: yup.string().required("Confirm password").oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export function AuthEmail() {
    const { handleSubmit,handleChange,values,errors,touched } = useFormik({
        initialValues: {email:"",password:"",passwordConfirmation:""},
        onSubmit: () => {

        },
        validationSchema: schema
    });
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-2">
                <TextField
                type="email"
                id="email"
                label={!errors.email && touched.email ? "email is good" : "email"}
                variant="outlined"
                className="w-full"
                value={values.email}
                onChange={handleChange}/>
                {errors.email && touched.email ? <span className="text-[10px] text-red-500">{errors.email}</span> : null}
            </div>
            <div className="flex flex-col mb-2">
                <TextField
                type="password"
                id="password"
                label={!errors.password && touched.password ? "password is good" : "password"}
                variant="outlined"
                className="w-full"
                value={values.password}
                onChange={handleChange}/>
                {errors.password && touched.password ? <span className="text-[10px] text-red-500">{errors.password}</span> : null}
            </div>
            {!errors.password && values.password.length ?
            <div className="flex flex-col mb-2">
                <TextField
                type="password"
                id="passwordConfirmation"
                label={!errors.passwordConfirmation && touched.passwordConfirmation ? "password matched" : "password confirmation"}
                variant="outlined"
                className="w-full"
                value={values.passwordConfirmation}
                onChange={handleChange}/>
                {errors.passwordConfirmation && touched.passwordConfirmation ? <span className="text-[10px] text-red-500">{errors.passwordConfirmation}</span> : null}
            </div>
            : null }

            <Button type="submit" variant="contained" style={{backgroundColor:"limegreen"}} className="w-full">Continue</Button>
        </form>
    )
}