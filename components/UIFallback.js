"use client"
import { CircularProgress } from "@mui/material";

export default function UIFallback () {
    return (
        <div className="absolute top-0 bottom-0 left-0 z-10 w-full h-screen flex justify-center items-center bg-lime-200/50">
            <CircularProgress style={{color:"forestgreen"}}/>
        </div>
    )
}