import { useMemo } from 'react';

export const useSort = (typeSort, choosenItems) => {
  const sortedItems = useMemo( () => {
    if (typeSort === 'Alphabet') {
      return [...choosenItems].sort((a, b) => a.Cur_Name.localeCompare(b.Cur_Name))
    }
    if (typeSort === 'Ascending') {
      return [...choosenItems].sort((a, b) => a.Cur_OfficialRate - b.Cur_OfficialRate)
    }
    if (typeSort === 'Descending') {
      return [...choosenItems].sort((a, b) => b.Cur_OfficialRate - a.Cur_OfficialRate)
    }
    return choosenItems;
  }, [typeSort, choosenItems]);

  return sortedItems;
}
 
