'use client'
import React, { useState } from 'react'

import { createContext } from "react"
import { accordionProps, contextProps } from '../declaration'

const AccordionContext = createContext({} as accordionProps)

export default AccordionContext

export const AccordionProvider = ({children}: contextProps)=>{
    const [currentAccord, setCurrentAccord] = useState<number | null>(null)

    return(<AccordionContext.Provider value={{currentAccord, setCurrentAccord}}>
        {children}
    </AccordionContext.Provider>)
}