import utilStyles from '../styles/utils.module.css';

export default function Layout({ home, children, title }) {
    return (
        <div className="container">
            <h1 className="headingXL text-center mb-5 mt-3">{title}</h1>
            <main>{children}</main>
        </div>
    )
}