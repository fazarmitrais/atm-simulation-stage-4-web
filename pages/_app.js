import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'
import { useEffect } from "react";
import RouteGuard from '../components/routeGuard';

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <RouteGuard>
            <Component {...pageProps} />
        </RouteGuard>);
}

export default App;