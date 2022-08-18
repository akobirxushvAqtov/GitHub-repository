import React, { useContext } from 'react';
import { Context } from '../App';

export default function Component3() {

    const {count} = useContext(Context)

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
