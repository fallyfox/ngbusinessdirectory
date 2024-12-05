"use client"
import { Suspense } from "react";
import UIFallback from "@/components/UIFallback";
import UpdateBusinessProcess from "./update-business-process";

export default function UpdateBusiness () {
    return (
        <Suspense fallback={<UIFallback/>}>
            <UpdateBusinessProcess/>
        </Suspense>
    )
}