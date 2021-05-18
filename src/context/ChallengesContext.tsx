import { createContext, useState, useEffect, useContext } from 'react'
import { ChallengesContextData, ChallengesProviderProps } from '@/types'

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ 
    children
}: ChallengesProviderProps) {
    return (
        <ChallengesContext.Provider value={{}}>
            { children }
        </ChallengesContext.Provider>
    );
}