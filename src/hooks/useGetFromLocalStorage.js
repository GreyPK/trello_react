import { useEffect } from 'react'

const useGetFromLocalStorage = (itemName, setItem) => {
  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem(itemName))
    localStorageItems && setItem(localStorageItems)
    // eslint-disable-next-line
  }, [])
}

export default useGetFromLocalStorage
