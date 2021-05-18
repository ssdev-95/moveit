import { createContext, useState, useEffect, useContext } from 'react';

import { CountdownContextData, CountdownProviderProps } from '@/types'

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
    
    return (
        <CountdownContext.Provider value={{}}>
            {children}
        </CountdownContext.Provider>
    );
}