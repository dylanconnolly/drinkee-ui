import { Drink } from '../types/drink';

export const fetchAllDrinkIDs = async (): Promise<number[]> => {
  const resp = await fetch('http://localhost:8080/api/v1/drinks')
  const data = await resp.json()

  const ids = data.map((drink: Drink) => {
    return drink.id
  })

  return ids
}

export const fetchAllDrinks = async (): Promise<Drink[]> => {
  const resp = await fetch('http:/localhost:8080/api/v1/drinks')
  return await resp.json();
}

export const fetchDrinkDataByID = async (id: string | string[]): Promise<Drink> => {
  const resp = await fetch(`http:/localhost:8080/api/v1/drinks/${id}`)
  const drink: Drink = await resp.json()
  
  return drink
}