import { useEffect } from 'react'

const useSetToLocalStorage = (itemName, item) => {
	useEffect(() => {
		localStorage.setItem(itemName, JSON.stringify(item))
		// eslint-disable-next-line
	}, [item])
}

export default useSetToLocalStorage
