import Link from 'next/link';
import styles from '@component/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Layout from '../../components/layout';
import { fetchAllDrinks } from '../../lib/drinks';
import utilStyles from '../../styles/utils.module.css';
const inter = Inter({ subsets: ['latin'] })
import { GetStaticProps } from 'next';
import { Drink } from '../../types/drink';
import Card from '../../components/card/card'
import CardContainer from '../../components/card/card-container'
import Header from '../../components/header/header'
import ExpandMoreButton from '@component/components/buttons/ExpandMoreButton';

export const getStaticProps: GetStaticProps = async () => {
  const drinks: Drink[] = await fetchAllDrinks()
  return {
    props: {
      drinks,
    },
  }
}

export default function Drinks({ drinks }: any) {

  const handleExpand = () => {
    console.log('Button expanded!');
  };
  return (
    <>
    <Layout>
      <Header>
      </Header>
      <CardContainer>
        {drinks.map((drinkData: Drink) => (
          <Card drink={drinkData} key={drinkData.id}/>
        ))}
      </CardContainer>
    </Layout>
    </>
  )
}