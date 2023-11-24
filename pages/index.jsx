import styles from '../styles/utils.module.css';
import Layout from '../components/layout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Home = () => {
  return (
    <Layout home title="Transaction">
        <div className={styles.transactionSection}>
          <div className='row'><Link href="/withdraw">Withdraw</Link></div>
          <div className='row'><Link href="/transfer">Transfer</Link></div>
          <div className='row'><Link href="/account/logout">Exit</Link></div>
        </div>
    </Layout>
  );
}

export default Home;