import { fetchAllDrinkIDs, fetchDrinkDataByID } from "../../lib/drinks"
import { GetStaticPaths, GetStaticProps } from 'next';
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'
// import { Drink } from '../../../types/drink'

export const getStaticPaths: GetStaticPaths = async () => {
  const drinkIDs: number[] = await fetchAllDrinkIDs()

  const paths = drinkIDs.map((id: number) => {
    return {
      params: {
        id: id.toString(),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.id) {
    const drinkData = await fetchDrinkDataByID(params.id)
  
    return {
      props: {
        drinkData,
      },
    }
  }

  return {
    props: {error: true}
  }
}

export default function Drink({ drinkData }: any) {
  return (
    <Layout>
      <h1 className={utilStyles.headingLg}>{drinkData.name}</h1>
      <p>{drinkData.description}</p>
      <p>{drinkData.instructions}</p>
      {drinkData.drinkIngredients.map((drinkIngredient: any) => (
        <p>{drinkIngredient.measurement} {drinkIngredient.displayName}</p>
      ))}
    </Layout>
  )
}