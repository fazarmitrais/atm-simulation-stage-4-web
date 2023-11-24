import { useRouter } from "next/router"
import { accountService } from "../../services/accountService"

const Logout = () => {
    const router = useRouter();
    accountService.logout(router);
}

export default Logout;