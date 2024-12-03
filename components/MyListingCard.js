import Link from "next/link";

export function MyListingCard ({listingId,data}) {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 p-4 border border-lime-600 rounded-sm">
            <div>
                <p className="text-lime-800 text-lg">business name</p>
                <p className="text-gray-500 text-xs">Created at: some dates</p>
            </div>

            <ul className="flex items-center gap-6">
                <li className="text-gray-700 text-md">Category name</li>
                <li className="text-gray-700 text-md">LGA, State</li>
            </ul>

            <Link href="#" className="h-8 flex justify-center items-center bg-lime-700 text-white px-2 rounded-sm">View Listing</Link>
        </div>
    )
}