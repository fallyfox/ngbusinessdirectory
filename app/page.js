import Link from "next/link";
import { BusinessCard } from "@/components/BusinessCard";

const demoArray = ["1","2","3","4","5"];

export default function Page () {

  return (
    <main className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-4 px-2 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
        {/* sponsored */}
        <div className="col-span-2 bg-gray-100 rounded-sm p-2">

        </div>

        {/* feeds */}
        <div className="col-span-3 flex flex-col gap-6">
          {demoArray.map(biz => <BusinessCard key={biz}/>)}
        </div>

        {/* categories */}
        <div className="hidden lg:flex bg-gray-100 rounded-sm p-2">
          {/* featured business */}
          {/* categories */}
        </div>
    </main>
  )
}