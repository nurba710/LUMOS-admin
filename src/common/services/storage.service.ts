export const setStorage = (key: string, value: string) => {
	localStorage.setItem(key, value)
}

export const getStorage = (key: string) => {
	return localStorage.getItem(key)
}

export const removeStorage = (key: string) => localStorage.removeItem(key)

export const clearStorage = () => localStorage.clear()
