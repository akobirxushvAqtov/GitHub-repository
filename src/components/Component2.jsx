import React, { useContext } from 'react'
import { Context } from '../App'
import Component4 from './Component4'

export default function Component2() {

const { setCount, count } = useContext(Context)

    return (
        <div>
            <Component4/>
            

        </div>
    )
}


