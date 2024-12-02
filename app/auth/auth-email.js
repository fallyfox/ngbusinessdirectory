"use client"
import { TextField, Button } from "@mui/material"
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
    const {data:session} = useSession()
    const router = useRouter()
    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: { email: "" },
        onSubmit: async (values) => {
            try {
                const res = await signIn("nodemailer", { email: values.email, redirect: true });
                if (res?.error) {
                    alert("Authentication failed: check console");
                    console.log(res?.error);
                    
                } else {
                    alert("Check your email for a sign-in link!");
                }

            } catch (error) {
                console.error("Error during sign-in:", error);
            }
        },
        validationSchema: schema
    });

    useEffect(()=>{
        if (session) {
            router.push("/my/profile")
        }
    }, [])

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