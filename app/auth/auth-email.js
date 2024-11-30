"use client"
// import { signIn } from "@/auth";
import { TextField, Button } from "@mui/material"
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    // password: yup.string().required().matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
    // passwordConfirmation: yup.string().required("Confirm password").oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export function AuthEmail() {
    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: { email: "" },
        onSubmit: async (values) => {
            try {
                const res = await signIn("email", { email: values.email, redirect: false });
                if (res?.error) {
                    alert("Authentication failed: " + res.error);
                } else {
                    alert("Check your email for a sign-in link!");
                }
            } catch (error) {
                console.error("Error during sign-in:", error);
            }
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
                    onChange={handleChange} />
                {errors.email && touched.email ? <span className="text-[10px] text-red-500">{errors.email}</span> : null}
            </div>

            <Button type="submit" variant="contained" style={{ backgroundColor: "limegreen" }} className="w-full">Continue</Button>
        </form>
    )
}