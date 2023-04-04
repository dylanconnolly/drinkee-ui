import { Ingredient } from "@component/types/ingredients";

export const fetchAllIngredients = async (): Promise<Ingredient> => {
  const resp = await fetch('http:/localhost:8080/api/v1/ingredients')
  return await resp.json();
}