import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { accountService } from "../../services/accountService";
import { useState } from "react";

const accountImport = () => {
    const [file, setFile] = useState(null);
    const router = useRouter();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(); 
        formData.append("fileInput", file);
        let res = await accountService.accountImport(formData);
        if (res.error) {
            document.getElementById("pMessage").innerHTML = res.error;
        } else {
            router.push("/account/list");
        }
    }
    return (
        <Layout title="Accounts Import">
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3 row justify-content-center align-items-center g-2">
                        <label labelfor="fileInput" className="col-5 col-form-label">Browse File</label>
                        <div className="col-7">
                            <input type="file" className="form-control" name="fileInput" id="fileInput" placeholder="Browse File" onChange={(e) => handleFileChange(e)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="offset-sm-4 col-sm-8">
                            <button type="submit" className="btn btn-primary">Import</button>
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

export default accountImport;