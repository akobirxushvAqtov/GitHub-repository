import React from 'react'
import { useEffect, useState } from 'react';

export default function useLocalStorageSaver(key, initialState) {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        localStorage.setItem(key, state)
    }, [state]);
    return[state, setState]
}
