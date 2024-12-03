import { auth } from "@/auth";
import Add from "./add";
import { Authorization } from "@/config/authorization.config";

export default async function Page () {
    const session = await auth();

    return (
       <>
       <Authorization/>
       <Add userID={session?.user?.id}/>
       </>
    )
} 