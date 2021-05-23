import { createContext, useContext, useState } from 'react'
import { LevelUpModalContextData, ProviderProps } from '@/types'

export const LevelUpModalContext = createContext({} as LevelUpModalContextData)

export const LevelUpModalContextProvider = ({ children }: ProviderProps) => {
    const [isLevelingUp, setIsLevelingUp] = useState(false)

    const toggleLevelUpModal = () => {
        setIsLevelingUp(!isLevelingUp)
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
