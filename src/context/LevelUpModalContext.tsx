import { createContext, useContext, useState } from 'react'

import { LevelUpModalContextData, LevelUpModalProviderProps } from '@/types'

export const LevelUpModalContext = createContext({} as LevelUpModalContextData)

export const LevelUpModalContextProvider = ({ children }: LevelUpModalProviderProps) => {
    const [isLevelUp, setIsLevelUp] = useState(false)

    const toggleLevelUpModal = () => {
        setIsLevelUp(!isLevelUp)
    }

    return (
        <LevelUpModalContext.Provider
          value={{
            isLevelUp,
            toggleLevelUpModal
          }}
        >{ children }</LevelUpModalContext.Provider>
    )
}

export default function useModal() {
    return useContext(LevelUpModalContext)
}
