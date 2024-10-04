function useLocalStorage() {
    const getValue = (key: any) => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error(`Error retrieving localStorage key "${key}":`, error);
            return null;
        }
    }

    const setValue = (key: any, value: any) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    }

    return { getValue, setValue };
}

export default useLocalStorage;
