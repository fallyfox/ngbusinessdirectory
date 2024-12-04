"use client"
import { useState,useEffect } from "react";
import { MyListingCard } from "@/components/MyListingCard";
import { db } from "@/config/firebase.config";
import { getDocs,collection,query,where,orderBy } from "firebase/firestore";

export default function My ({userId}) {
    const [directories,setDirectories] = useState([]);

    useEffect(() => {
        const handleFetchDirectories = async () => {
            const q = query(
                collection(db,"directories"),
                where("createdBy","==",userId),
                orderBy("createdAt","desc")
            );

            const onSnap = await getDocs(q);

            const compiledData = [];

            onSnap.docs.forEach(doc => {
                compiledData.push({
                    id:doc.id,
                    data:doc.data()
                })
            });

            setDirectories(compiledData)
        }

        handleFetchDirectories()
    },[]);

    return (
        <section className="grid grid-cols-1 lg:grid-cols-4 px-2 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
            <article className="col-span-3 flex flex-col gap-3">
                {directories.map((doc) => {
                    return <MyListingCard key={doc.id} listingDoc={doc}/>
                })}
            </article>
            
            <aside>

            </aside>
        </section>
    )
}