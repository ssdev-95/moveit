import React, { createContext, useContext, useState, useEffect } from 'react'

import useModal from '@/context/LevelUpModalContext'

import { ProviderProps, ProfileContextData, User } from '@/types'
import { useCookies } from 'react-cookie'

const ProfileContext = createContext({} as ProfileContextData)

export const ProfileProvider = ({ children }: ProviderProps) => {
    const [userData, setUserData] = useState<User>({
        name: 'Salomao Souza',
        avatar: 'https://github.com/xSallus.png',
        level: 1,
        baseXP: 0,
        nextLevelXP: 64,
        completedChallenges: 0
    })

    const { toggleLevelUpModal } = useModal()

    const levelUP = () => {
        setUserData({
            ...userData,
            level: userData.level+1,
            nextLevelXP: Math.pow((userData.level+2)*4, 2)
        })
        toggleLevelUpModal()
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

    const [ cookies, setCookie ]= useCookies(['profile'])

    useEffect(()=>{
        const { nextLevelXP, baseXP } = userData

        if(baseXP>=nextLevelXP)  {
            levelUP()
            setUserData({
                ...userData,
                baseXP: baseXP-nextLevelXP
            })
        }
    }, [userData])

    useEffect(()=>{
        setCookie('profile', JSON.stringify(userData))
    }, [])

    useEffect(()=>{
        setCookie('profile', JSON.stringify(userData))
    }, [userData])

    const updateProfileData = (newName: string, newAvatar: string) => {
        setUserData({
            ...userData,
            name: newName,
            avatar: newAvatar
        })
    }

    return (
        <ProfileContext.Provider value={{
            userData,
            updateProfileData,
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
