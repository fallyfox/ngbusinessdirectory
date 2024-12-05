import { Authorization } from "@/config/authorization.config";
import UpdateBusiness from "./update-business";

export default async function Page() {
    return (
        <>
        <Authorization/>
        <UpdateBusiness/>
        </>
    )
}