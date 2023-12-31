import { isBrowser } from '@/utils';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

function UseLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {

    const [storedValue, setStoredValue] = useState<T>(() => {
        const item = typeof window !== 'undefined' && window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
        if (isBrowser()) {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

export default UseLocalStorage;
