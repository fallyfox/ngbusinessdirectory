"use client"
import { useState } from "react";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { HiMenuAlt3 } from "react-icons/hi";
import { GoDash } from "react-icons/go";

const bebasNeue = Bebas_Neue({
    subsets:["latin"],
    weight:"400"
})

export function Nav () {
    const [menuClicked,setMenuClicked] = useState(false);

    return (
        <>
        <nav className="h-[60px] w-full flex justify-between items-center px-2 md:px-8 lg:px-16 shadow-md">
            <ul className="flex flex-col lg:flex-row lg:items-center gap-4">
                <li className={`${bebasNeue} text-lg uppercase`}><Link href="/">Iseowo</Link></li>
                <li className="text-md text-gray-800 hidden lg:block"><Link href="/">Home</Link></li>
            </ul>
            <ul className="hidden lg:flex flex-col lg:flex-row lg:items-center gap-4">
                <li className="text-md text-gray-800"><Link href="#">Businesses</Link></li>
                <li className="text-md text-gray-800"><Link href="#">Categories</Link></li>
                <li className="text-md text-gray-800"><Link href="#">Enquiries</Link></li>
            </ul>
            <ul className="flex flex-row items-center gap-4">
                <li>
                    <Link href="#" className="text-md text-gray-800 border border-gray-400 py-2 px-3">Sign in</Link>
                </li>
                <li>
                    {
                        menuClicked ?
                        <GoDash onClick={() => setMenuClicked(false)} className="text-gray-800 text-2xl lg:hidden"/>
                        :
                        <HiMenuAlt3 onClick={() => setMenuClicked(true)} className="text-gray-800 text-2xl lg:hidden"/>
                    }
                </li>
            </ul>
        </nav>

        {/* mobile nav links */}
        <div 
        style={{display:menuClicked ? "flex" : "none"}} 
        className="w-full min-h-[380px] absolute top-[62px] bg-white px-2 md:px-8">
            <ul className="w-full flex flex-col justify-start items-end gap-6 py-8">
                <li className="text-2xl text-gray-800"><Link href="#">Businesses</Link></li>
                <li className="text-2xl text-gray-800"><Link href="#">Categories</Link></li>
                <li className="text-2xl text-gray-800"><Link href="#">Enquiries</Link></li>
            </ul>
        </div>
        </>
    )
}