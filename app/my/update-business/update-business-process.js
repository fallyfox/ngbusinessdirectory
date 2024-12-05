"use client"
import { useState,useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TextField,CircularProgress,Dialog,DialogContent,DialogActions } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { businessCategories } from "@/utils/business_categories";
import { ngstates } from "@/utils/ng_states";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { db } from "@/config/firebase.config";
import { getDoc,doc } from "firebase/firestore";

const rules = yup.object().shape({
    business_name:yup.string("business name must be a string").required("business name is mandatory").min(6,"business name must be at least 6 characters"),
    category:yup.string().notOneOf(["none"]),
    sub_category:yup.string().notOneOf(["none"]),
    state:yup.string().notOneOf(["none"]),
    lga:yup.string().notOneOf(["none"]),
    business_description:yup.string().required().min(20),
    website: yup.string().url().nullable(),
});

export default function UpdateBusinessProcess () {
    const [startProgress,setStartProgress] = useState(false);
    const [open, setOpen] = useState(false);
    const [business,setBusiness] = useState({});

    const docId = useSearchParams().get("doc_id");

    const handleClickOpen = () => setOpen(true);
    const handleClose = () =>  setOpen(false);

    // fetch current business records
    useEffect(() => {
        const handleFetchBusiness = async () => {
            const res = await getDoc(doc(db,"directories",docId));
            if (res.exists()) {
                setBusiness(res.data())
            } else {
                alert("Invalid business ID")
            }
        } 
        handleFetchBusiness();
    },[]);

    const { handleSubmit,values,handleChange,touched,errors } = useFormik({
        initialValues: { business_name:business?.businessName, category:business?.category,sub_category:"",state:"",lga:"",business_description:business?.description,website:business?.url},
        onSubmit: async () => {
            // Start loading indicator
            setStartProgress(true);
        },
        validationSchema: rules
    });

    return (
        <>
        <main className="flex justify-center px-2 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
            <div className="w-full md:w-[620px] rounded-md bg-white shadow-md p-4">
                <h1 className="text-2xl font-thin mb-6">Update Your business</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <TextField
                        type="text"
                        id="business_name"
                        label="business name"
                        variant="outlined"
                        className="w-full"
                        value={values.business_name}
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="mb-3">
                            <TextField
                            select
                            SelectProps={{native:true}}
                            id="state"
                            variant="outlined"
                            className="w-full"
                            value={values.state}
                            onChange={handleChange}>
                                <option value="none">Choose state</option>
                                {ngstates.map(sta => <option value={sta.label} key={sta.label}>{sta.label}</option>)}
                            </TextField>
                            {touched.state && errors.state ? <span className="text-xs text-red-400">{errors.state}</span> : null}
                        </div>
                        <div className="mb-3">
                            <TextField
                            select
                            SelectProps={{native:true}}
                            id="lga"
                            variant="outlined"
                            className="w-full"
                            value={values.lga}
                            onChange={handleChange}>
                                <option value="none">Choose LGA</option>
                                {ngstates.filter(item => item.label == values.state)[0]?.lga.map(lga => <option value={lga} key={lga}>{lga}</option>)}
                            </TextField>
                            {touched.lga && errors.lga ? <span className="text-xs text-red-400">{errors.lga}</span> : null}
                        </div>
                    </div>

                    <div className="mb-3">
                        <TextField
                        multiline
                        rows={3}
                        type="text"
                        id="business_description"
                        label="business description"
                        variant="outlined"
                        className="w-full"
                        onChange={handleChange}/>
                        {touched.business_description && errors.business_description ? <span className="text-xs text-red-400">{errors.business_description}</span> : null}
                    </div>

                    <div className="mb-3">
                        <TextField
                        type="text"
                        id="website"
                        label="website"
                        variant="outlined"
                        className="w-full"
                        onChange={handleChange}/>
                        {touched.website && errors.website ? <span className="text-xs text-red-400">{errors.website}</span> : null}
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
        
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <p className="flex justify-center items-center gap-2 mb-4">
                    <IoIosCheckmarkCircle className="text-xl text-green-500"/>
                    <span className="text-green-600">Success</span>
                </p>
                <p className="text-gray-700">Your business have been successfully listed on NG Business Directory</p>
            </DialogContent>
            <DialogActions>
                <Link href="/" className="h-8 flex justify-center items-center bg-lime-700 text-white rounded-sm px-2">Return to Home</Link>
                <Link href="/my" className="h-8 flex justify-center items-center bg-lime-700 text-white rounded-sm px-2">Return to Dashboard</Link>
            </DialogActions>
        </Dialog>
        </>
    )
}