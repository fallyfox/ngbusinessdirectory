import { auth } from "@/auth";

export default async function Page() {
    const session = await auth();
    
    return (
        <main>
            <p>my businesses</p>
        </main>
    )
}