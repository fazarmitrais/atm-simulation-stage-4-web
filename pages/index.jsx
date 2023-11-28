import styles from '../styles/utils.module.css';
import Layout from '../components/layout';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout home title="Transaction">
        <div className={styles.transactionSection}>
          <div className='row'><Link href="/account/list">Account List</Link></div>
          <div className='row'><Link href="/withdraw">Withdraw</Link></div>
          <div className='row'><Link href="/transfer">Transfer</Link></div>
          <div className='row'><Link href="/account/logout">Exit</Link></div>
        </div>
    </Layout>
  );
}

export default Home;