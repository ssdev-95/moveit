import { createContext, useContext, useState } from 'react'

import { LevelUpModalContextData, LevelUpModalProviderProps } from '@/types'

export const LevelUpModalContext = createContext({} as LevelUpModalContextData)

export const LevelUpModalContextProvider = ({ children }: LevelUpModalProviderProps) => {
    const [isLevelingUp, setIsLevelingUp] = useState(false)
    const [currentLevel, setCurrentLevel] = useState(1)

    const toggleLevelUpModal = () => {
        setIsLevelingUp(!isLevelingUp)
    }

    const upALevel = () => {
      setCurrentLevel(currentLevel+1)
    }

    return (
        <LevelUpModalContext.Provider
          value={{
            isLevelingUp,
            toggleLevelUpModal
          }}
        >{ children }</LevelUpModalContext.Provider>
    )
}

export default function useModal() {
    return useContext(LevelUpModalContext)
}
