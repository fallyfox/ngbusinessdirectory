import Image from "next/image";

export default function Page () {
    return (
        <main className="py-8 md:py-12 lg:py-16 px-2 md:px-8 lg:px-16">
            <h1 className="text-4xl mb-4">Iseowo. The Freelance market Place for Artisans</h1>
            <Image width={720} height={380} src="/code.png" alt="about us picture"/>
        </main>
    )
}