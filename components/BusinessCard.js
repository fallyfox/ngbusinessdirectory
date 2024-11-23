import Link from "next/link";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6"

export function BusinessCard () {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <Link href="#">
                    <Image width={40} height={40} src="/demo-images/demo-logo.png" alt="business logo"/>
                </Link>
                <Link href="#" className="flex flex-col">
                    <span className="text-lg text-lime-800">Unified Trading For Water Packaging Limited</span>
                    <span className="text-xs text-gray-500">Abaji, FCT</span>
                </Link>
            </div>

            <p className="text-sm text-gray-700">A variety of reported recipes and experimental recreations have been published. The secrecy around the formula has been used by Coca-Cola as a marketing aid because only a handful of anonymous employees know the formula.</p>

            <blockquote className="grid grid-cols-2 border border-lime-400 rounded-md p-2">
                <p className="text-sm text-lime-600 border-r border-lime-400">Listed in: Water Production</p>
                <Link href="#" className="flex justify-end items-center gap-2 text-lime-600 text-sm">
                    <span>View Business</span>
                    <FaChevronRight/>
                </Link>
            </blockquote>
        </div>
    )
}