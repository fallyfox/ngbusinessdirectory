import Image from "next/image";
import { auth,signOut } from "@/auth";
import { Authorization } from "@/config/authorization.config";
import { IoIosLogOut } from "react-icons/io";
import { Button } from "@mui/material";

export default async function Page () {
    const session = await auth();

    return (
        <>
        <Authorization/>
        <main className="md:min-h-[520px] flex justify-center px-2 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
            <div className="w-full md:w-[320px] flex flex-col justify-between gap-4 md:gap-6 rounded-md bg-white shadow-md p-4">
                <div className="flex flex-col gap-4 md:gap-6 ">
                    <div className="flex justify-center">
                        <Image 
                        width={60} 
                        height={60}
                        src={session?.user?.image}
                        alt="profile image"
                        className="h-[60px] w-[60px] rounded-full"/>
                    </div>

                    <ul className="flex flex-col gap-3">
                        <li className="text-md pb-2 mb-3 border-b border-gray-200">{session?.user?.name}</li>
                        <li className="text-md pb-2 mb-3 border-b border-gray-200">Account email: {session?.user?.email}</li>
                        <li className="text-md pb-2 mb-3 border-b border-gray-200">UID: {session?.user?.id}</li>
                    </ul>
                </div>

                <form action={async () => {
                    "use server"
                    await signOut()
                }}>
                    <Button type="submit" variant="contained" color="error" className="flex gap-3 items-center">
                        <span>Logout</span>
                        <IoIosLogOut className="text-xl"/>
                    </Button>
                </form>
            </div>
        </main>
        </>
    )
}