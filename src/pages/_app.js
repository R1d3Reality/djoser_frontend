import '@nextcss/reset';
import 'normalize.css/normalize.css';
import '../style/global.css';
import Layout from "@/components/Layout/Layout";




const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default MyApp;