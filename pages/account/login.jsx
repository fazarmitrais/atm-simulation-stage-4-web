import Layout from "../../components/layout";
import styles from "../../styles/utils.module.css";
import { accountService } from "../../services/accountService";
import { useRouter } from "next/router"

export default function Login() {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        var formData = new FormData(e.target)

        var jsonData = {};
        formData.forEach(function (value, key) {
            jsonData[key] = value;
        });

        var jsonPayload = JSON.stringify(jsonData);

        accountService.login(router, jsonPayload, document.getElementById("pMessage"));
    };

    return (
        <Layout children title="Login">
            <div className={styles.loginSection}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3 row">
                        <label labelfor="accountNumber" className="col-5 col-form-label">Account Number</label>
                        <div className="col-7">
                            <input type="text" className="form-control" name="accountNumber" id="accountNumber" placeholder="Account Number" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label labelfor="pin" className="col-5 col-form-label">PIN</label>
                        <div className="col-7">
                            <input type="password" className="form-control" name="pin" id="pin" placeholder="PIN" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="offset-sm-4 col-sm-8">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                    <div className="mb-3 row text-danger text-center">
                        <p id="pMessage"></p>
                    </div>
                </form>
            </div>
        </Layout>
    )
}