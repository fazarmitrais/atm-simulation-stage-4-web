import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/utils.module.css";
import { accountService } from "../../services/accountService";

const List = ({ data, message }) => {
    return (
        <Layout title="Account List">
            <div className="listSection">
                <div className={styles.buttonContainer}>
                    <Link className="btn btn-success" href="/account/add">Create New Account</Link>
                    <Link className="btn btn-success" href="/account/accountImport">Import Accounts</Link>
                </div>
                <div className="table-responsive mt-5">
                    <table className="table table-striped
                    table-hover	
                    table-borderless
                    table-primary
                    align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Account Number</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {data?.map(({ accountNumber, name }) => (
                                <tr className="table-primary" key={accountNumber}>
                                    <td scope="row">{accountNumber}</td>
                                    <td>{name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mb-3 row text-danger text-center">
                    <p id="pMessage">{message}</p>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps({ req }) {
    try {
        let data = null;
        data = await accountService.list(req);
        return {
            props: {
                data,
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                message: "Error getting account list",
            }
        }
    }

    /*
    resp.json()
        .then(resp => {
            if (isError) {
                return {
                    props: { message: resp.message },
                }
            }
            console.log(resp)
            return {
                props: { resp, }
            }
        })
        .catch((error) => {
            return {
                props: { message: error },
            }
        });
        return {
            props: {}
        }*/
}

export default List;