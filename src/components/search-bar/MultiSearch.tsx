import Select from 'react-select';
import styles from './MultiSearch.module.css'
import { useState } from 'react';
import { fetchGenerateCocktails } from '@component/lib/drinks';
import { Ingredient } from '@component/types/ingredients';

export default function MultiSearch({ items, submitText, onClickFunc }: any) {
  const [selected, setSelected] = useState(new Array)

  // const apiRoute = `https://localhost:8080/api/v1/${route}`
  
  const searchValues = items.map((item: any) => {
    return {
      value: item,
      label: item.displayName,
    }
  })

  const handleChange = (selectedOptions: any) => {
    setSelected(selectedOptions)
  }

  const handleClick = async () => {
    // console.log('options selected are:', selected);
    console.log('click')
    

    if (selected.length < 1) {
      console.log('no selections made')
      return
    }
    
    const ingredients: Ingredient[] = selected.map(selection => {
      return selection.value
    })

    onClickFunc(ingredients)
    
    // const resp = await fetchGenerateCocktails(ingredients, route)
    // console.log(resp.body);
  }

  return (
    <>
    <label className={styles.fullWidth}>
      <Select
        isMulti
        name="ingredients"
        className="basic-multi-select"
        classNamePrefix="select"
        options={searchValues}
        placeholder="Select ingredients..."
        onChange={handleChange}
      />
    </label>
    <div className={styles.halfWidth}>
      <button className={styles.btnCenter} type="button" onClick={handleClick}>{submitText}</button>
    </div>
    </>
  )
}