"use client"
import { Skeleton } from "@mui/material"

export function LoadingPlaceHolder () {
    return (
        <main className="flex justify-center px-2 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
            <div className="w-full md:w-[620px] rounded-md bg-white shadow-md p-4">
                <div className="flex flex-col gap-8">
                    <Skeleton variant="rounded" height={33} className="w-full"/>

                    <div className="flex flex-col gap-3">
                        <Skeleton variant="rounded" height={52} className="w-full"/>
                        <Skeleton variant="rounded" height={52} className="w-full"/>
                        <Skeleton variant="rounded" height={52} className="w-full"/>
                        <Skeleton variant="rounded" height={52} className="w-full"/>
                        <Skeleton variant="rounded" height={52} className="w-full"/>
                    </div>
                </div>
            </div>
        </main>
    )
}