import Layout from "../components/Layouts/Layout";
import {useAuth} from "../context/auth";

const HomePageLinhTest = () => {
    const [auth, setAuth] = useAuth();
    return (
        <Layout>
            <h1>Home Page Linh Test</h1>
            <pre>{JSON.stringify(auth, null, 4)}</pre>
        </Layout>
    );
};

export default HomePageLinhTest;
