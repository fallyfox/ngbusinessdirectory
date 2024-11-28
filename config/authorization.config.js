import { redirect } from "next/navigation";
import { auth } from "@/auth";

export async function Authorization () {
    const session = await auth();

    if (!session?.user) {
        redirect("/auth")
    }
}