"use client"
import { useState,useEffect } from "react";
import { MyListingCard } from "@/components/MyListingCard";

export default function My ({userId}) {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-4 px-2 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
            <article className="col-span-3">
                <MyListingCard />
            </article>
            
            <aside>

            </aside>
        </section>
    )
}