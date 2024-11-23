import Link from "next/link";

export function Footer () {
    return (
        <footer className="flex flex-col lg:flex-row lg:justify-between gap-4 bg-white py-4 md:py-6 px-2 md:px-8 lg:px-16">
            <ul className="flex flex-wrap gap-4 md:gap-6">
                <li className="text-xs text-gray-600"><Link href="#">Locations</Link></li>
                <li className="text-xs text-gray-600"><Link href="#">Sitemap</Link></li>
                <li className="text-xs text-gray-600"><Link href="#">Bug Bounty</Link></li>
                <li className="text-xs text-gray-600"><Link href="#">Affiliates</Link></li>
                <li className="text-xs text-gray-600"><Link href="#">T & C</Link></li>
                <li className="text-xs text-gray-600"><Link href="#">Privacy Policy</Link></li>
            </ul>

            <p className="text-xs text-gray-600">&copy; 2024 Iseowo. All Rights Reserved</p>
        </footer>
    )
}