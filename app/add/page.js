import { auth } from "@/auth";
import Add from "./add";
import { Authorization } from "@/config/authorization.config";

export default function Page () {

    return (
       <>
       <Authorization/>
       <Add/>
       </>
    )
}