import React from 'react'
import { useEffect, useState } from 'react';

export default function useLocalStorageGetter(key) {
    console.log(localStorage.getItem(key))
   return localStorage.getItem(key)
   
    // return[state, setState]
}

