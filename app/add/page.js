"use client"
import { useState } from "react";
import { TextField,Button,CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { businessCategories } from "@/utils/business_categories";
import { ngstates } from "@/utils/ng_states";

const rules = yup.object().shape({
    business_name:yup.string("business name must be a string").required("business name is mandatory").min(6,"business name must be at least 6 characters"),
    category:yup.string().notOneOf(["none"]),
    sub_category:yup.string().notOneOf(["none"]),
    state:yup.string().notOneOf(["none"]),
    lga:yup.string().notOneOf(["none"]),
    business_description:yup.string().required().min(20),
    website:yup.string().max(60)
});

export default function Page () {
    const [startProgress,setStartProgress] = useState(false);

    const { handleSubmit,values,handleChange,touched,errors } = useFormik({
        initialValues: { business_name:"", category:"",sub_category:"",state:"",lga:"",business_description:"",website:""},
        onSubmit: () => {
            console.log(values)
        },
        validationSchema: rules
    });

    return (
        <main className="flex justify-center px-2 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
            <div className="w-full md:w-[620px] rounded-md bg-white shadow-md p-4">
                <h1 className="text-2xl font-thin mb-6">Add a business</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <TextField
                        type="text"
                        id="business_name"
                        label="business name"
                        variant="outlined"
                        className="w-full"
                        onChange={handleChange}/>
                        {touched.business_name && errors.business_name ? <span className="text-xs text-red-400">{errors.business_name}</span> : null}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="mb-3">
                            <TextField
                            select
                            SelectProps={{native:true}}
                            id="category"
                            variant="outlined"
                            className="w-full"
                            value={values.category}
                            onChange={handleChange}>
                                <option value="none">choose category</option>
                                {businessCategories.map(cat => <option value={cat.category} key={cat.category}>{cat.category}</option>)}
                            </TextField>
                            {touched.category && errors.category ? <span className="text-xs text-red-400">{errors.category}</span> : null}
                        </div>
                        <div className="mb-3">
                            <TextField
                            select
                            SelectProps={{native:true}}
                            id="sub_category"
                            variant="outlined"
                            className="w-full"
                            value={values.sub_category}
                            onChange={handleChange}>
                                <option value="none">choose sub-category</option>
                                {businessCategories.filter(cat => cat.category == values.category)[0]?.subCategories.map(subCat => <option value={subCat} key={subCat}>{subCat}</option>)}
                            </TextField>
                            {touched.sub_category && errors.sub_category ? <span className="text-xs text-red-400">{errors.sub_category}</span> : null}
                        </div>
                    </div>

                    <button type="submit" className="bg-lime-700 text-white px-3 py-2 uppercase rounded-sm">Submit Business</button>
                </form>

                { startProgress ?
                <div className="absolute top-0 left-0 z-10 w-full h-screen flex justify-center items-center bg-lime-200/50">
                    <CircularProgress style={{color:"forestgreen"}}/>
                </div>
                : null}
            </div>
        </main>
    )
}