import { createContext, useContext, useState } from 'react'

import { LevelUpModalContextData, LevelUpModalProviderProps } from '@/types'

export const LevelUpModalContext = createContext({} as LevelUpModalContextData)

export const LevelUpModalContextProvider = ({ children }: LevelUpModalProviderProps) => {
    const [isLevelUp, setIsLevelUp] = useState(false)
    const [currentLevel, setCurrentLevel] = useState(1)

    const toggleLevelUpModal = () => {
        setIsLevelUp(!isLevelUp)
    }

    const upALevel = () => {
      setCurrentLevel(currentLevel+1)
    }

    return (
        <LevelUpModalContext.Provider
          value={{
            currentLevel,
            isLevelUp,
            upALevel,
            toggleLevelUpModal
          }}
        >{ children }</LevelUpModalContext.Provider>
    )
}

export default function useModal() {
    return useContext(LevelUpModalContext)
}
