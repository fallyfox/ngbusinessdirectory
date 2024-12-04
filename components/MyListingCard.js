"use client"
import { useState } from "react";
import Link from "next/link";
import { timestampToDate } from "@/utils/timestamp_to_date";
import { CiTrash } from "react-icons/ci";
import { db } from "@/config/firebase.config";
import { deleteDoc,doc } from "firebase/firestore";
import { LoadingProgress } from "./LoadingProgress";

export function MyListingCard ({listingDoc}) {
    const [openLoadingIndicator,setOpenLoadingIndicator] = useState(false)

    const handleDeleteBusiness = async () => {
        setOpenLoadingIndicator(true);

        
    }

    return (
        <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 p-4 border border-lime-600 rounded-sm">
            <div>
                <p className="text-lime-800 text-lg">{listingDoc?.data?.businessName}</p>
                <p className="text-gray-500 text-xs">Created at: {timestampToDate(listingDoc?.data?.createdAt)}</p>
            </div>

            <ul className="flex items-center gap-6">
                <li className="text-gray-700 text-md">{listingDoc?.data?.category}</li>
                <li className="text-gray-700 text-md">{listingDoc?.data?.lga}, {listingDoc?.data?.state}</li>
            </ul>

            <Link href="#" className="h-8 flex justify-center items-center bg-lime-700 text-white px-2 rounded-sm">View Listing</Link>

            <CiTrash className="absolute top-2 right-2 text-xl cursor-pointer"/>
        </div>
    )
}