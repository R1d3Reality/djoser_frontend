import Head from 'next/head';
const Layout = ({children}) => (
    <>
        <Head>
            <title>Djoser</title>
        </Head>
        {children}
    </>

);

export default Layout;