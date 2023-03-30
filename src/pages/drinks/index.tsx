import Link from 'next/link';
import styles from '@component/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Layout from '../../../components/layout';
import { fetchAllDrinks } from '../../../lib/drinks';
import utilStyles from '../../styles/utils.module.css';
const inter = Inter({ subsets: ['latin'] })
import { GetStaticProps } from 'next';
import { Drink } from '../../../types/drink';

export const getStaticProps: GetStaticProps = async () => {
  const drinks: Drink[] = await fetchAllDrinks()

  return {
    props: {
      drinks,
    },
  }
}

export default function Drinks({ drinks }: any) {
  return (
    <>
    <Layout>
    <h1>Drinks list page</h1>
    <Link className={styles.card} href="/">
      <h2 className={inter.className}>
        Home <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
        Go back to homepage
      </p>
    </Link>
    <ul className={utilStyles.list}>
      {drinks.map((drinkData: Drink) => (
        <li className={utilStyles.listItem} key={drinkData.id}>
          {drinkData.name}
          <br/>
          {drinkData.description}
        </li>
      ))}
    </ul>
    </Layout>
    </>
  )
}