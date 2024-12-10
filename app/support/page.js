import { auth } from "@/auth";
import { Authorization } from "@/config/authorization.config";
import Support from "./support";

export default function Page () {

    return (
       <>
       <Authorization/>
        <Support/>
       </>
    )
}