import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof initialValue === "function") {
            return (initialValue as () => T)()

        } else {
            return initialValue

        }
    })

    useEffect (() => {
        localStorage.setItem(key, JSON.stringify(value))
        return [value, setValue]


    }, [key, value])
} //a type of T or a function that returns T. T can be any type I want
//gets Value from localstorage