import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

const Layout = ({ home, children, title }) => {
    return (
        <>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container">
            <h1 className="headingXL text-center mb-5 mt-3">{title}</h1>
            <main>{children}</main>
        </div>
        </>
    )
}

export default Layout;