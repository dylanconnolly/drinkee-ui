import { DrinkIngredient } from "./drinkIngredient";

export interface Drink {
  id: number,
  name: string,
  displayName: string,
  description?: string,
  instructions: string,
  drinkIngredients?: DrinkIngredient[],
}