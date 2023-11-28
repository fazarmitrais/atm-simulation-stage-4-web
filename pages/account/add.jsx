import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { accountService } from "../../services/accountService";

const Add = () => {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        var formData = new FormData(e.target)

        var jsonData = {};
        formData.forEach(function (value, key) {
            jsonData[key] = value;
        });

        var jsonPayload = JSON.stringify(jsonData);

        let pMessage = document.getElementById("pMessage");
        let data = await accountService.createAccount(jsonPayload);
        if (data.error) {
            pMessage.innerHTML = data.error;
        } else {
            router.push("/account/list")
        }
    }
    return (
        <Layout title="Add New Account">
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3 row justify-content-center align-items-center g-2">
                        <label labelfor="name" className="col-5 col-form-label">Name</label>
                        <div className="col-7">
                            <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                        </div>
                    </div>
                    <div className="mb-3 row justify-content-center align-items-center g-2">
                        <label labelfor="accountNumber" className="col-5 col-form-label">Account Number</label>
                        <div className="col-7">
                            <input type="text" className="form-control" name="accountNumber" id="accountNumber" placeholder="Account Number" />
                        </div>
                    </div>
                    <div className="mb-3 row justify-content-center align-items-center g-2">
                        <label labelfor="pin" className="col-5 col-form-label">PIN</label>
                        <div className="col-7">
                            <input type="password" className="form-control" name="pin" id="pin" placeholder="PIN" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="offset-sm-4 col-sm-8">
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </div>
                    <div className="mb-3 row text-danger text-center">
                        <p id="pMessage"></p>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Add;