import React, { createContext, useContext, useState, useEffect } from 'react'

import { ProviderProps, ProfileContextData, User } from '@/types'
import { useCookies } from 'react-cookie'

const ProfileContext = createContext({} as ProfileContextData)

export const ProfileProvider = ({ children }: ProviderProps) => {
    const [userData, setUserData] = useState<User>({
        name: 'Salomao Souza',
        avatar: 'https://github.com/xSallus.png',
        baseXP: 0,
        level: 1,
        completedChallenges: 0
    })

    const [ cookies, setCookie ]= useCookies(['profile'])

    useEffect(()=>{
        setCookie('profile', JSON.stringify(userData))
    },[userData])

    const levelUP = () => {
        setUserData({
            ...userData,
            level: userData.level+1
        })
    }

    const xpUP = (xp:number) => {
        setUserData({
            ...userData,
            baseXP: userData.baseXP+xp
        })
    }

    const  completeChallenge = () => {
        setUserData({
            ...userData,
            completedChallenges: userData.completedChallenges+1
        })
    }

    return (
        <ProfileContext.Provider value={{
            userData,
            levelUP,
            xpUP,
            completeChallenge
        }}>
            { children }
        </ProfileContext.Provider>
    )
}

export default function useProfile() {
    return useContext(ProfileContext)
}
