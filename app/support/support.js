"use client";
import { useState } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const rules = yup.object().shape({
    subject: yup
        .string("Subject must be a string")
        .required("Subject is mandatory")
        .min(6, "Subject must be at least 6 characters"),
    category: yup
        .string()
        .notOneOf(["none"], "Please select a valid category")
        .required("Category is mandatory"),
    email: yup
        .string("Email must be a string")
        .email("Enter a valid email address")
        .required("Email is mandatory"),
    message: yup
        .string("Message must be a string")
        .required("Message is mandatory")
        .min(20, "Message must be at least 20 characters"),
});

const categories = [
    "Payments",
    "Problems with signup",
    "Customer Service",
    "Prescriptions",
    "Reports",
    "Others",
];

export default function Support() {
    const [startProgress, setStartProgress] = useState(false);

    const { handleSubmit, values, handleChange, touched, errors } = useFormik({
        initialValues: {
            subject: "",
            category: "",
            email: "",
            message: "",
        },
        onSubmit: async (values, {resetForm}) => {
            setStartProgress(true);
            console.log(values);
            try {
                const response = await fetch("/api/send-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    alert("Your message was sent successfully!");
                    resetForm()
                } else {
                    alert("Failed to send your message. Please try again.");
                }
            } catch (e) {
                console.error("Error submitting form:", e)
                alert("An error occurred. Please try again.")
            } finally {
                setStartProgress(false);
            }
        },
        validationSchema: rules,
    });

    return (
        <main className="flex justify-center px-2 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
            <div className="w-full md:w-[620px] rounded-md bg-white shadow-md p-4">
                <h1 className="text-2xl font-thin mb-6">Contact Support</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <TextField
                            type="text"
                            id="subject"
                            label="Subject"
                            variant="outlined"
                            className="w-full"
                            value={values.subject}
                            onChange={handleChange}
                        />
                        {touched.subject && errors.subject ? (
                            <span className="text-xs text-red-400">{errors.subject}</span>
                        ) : null}
                    </div>

                    <div className="mb-3">
                        <TextField
                            select
                            SelectProps={{ native: true }}
                            id="category"
                            variant="outlined"
                            className="w-full"
                            value={values.category}
                            onChange={handleChange}
                        >
                            <option value="none">Choose Category</option>
                            {categories.map((cat) => (
                                <option value={cat} key={cat}>
                                    {cat}
                                </option>
                            ))}
                        </TextField>
                        {touched.category && errors.category ? (
                            <span className="text-xs text-red-400">{errors.category}</span>
                        ) : null}
                    </div>

                    <div className="mb-3">
                        <TextField
                            type="email"
                            id="email"
                            label="Sender's Email"
                            variant="outlined"
                            className="w-full"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {touched.email && errors.email ? (
                            <span className="text-xs text-red-400">{errors.email}</span>
                        ) : null}
                    </div>

                    <div className="mb-3">
                        <TextField
                            multiline
                            rows={4}
                            type="text"
                            id="message"
                            label="Message"
                            variant="outlined"
                            className="w-full"
                            value={values.message}
                            onChange={handleChange}
                        />
                        {touched.message && errors.message ? (
                            <span className="text-xs text-red-400">{errors.message}</span>
                        ) : null}
                    </div>

                    <button
                        type="submit"
                        className="bg-lime-700 text-white px-3 py-2 uppercase rounded-sm"
                    >
                        Send Email
                    </button>
                </form>

                {startProgress ? (
                    <div className="absolute top-0 left-0 z-10 w-full h-screen flex justify-center items-center bg-lime-200/50">
                        <CircularProgress style={{ color: "forestgreen" }} />
                    </div>
                ) : null}
            </div>
        </main>
    );
}
