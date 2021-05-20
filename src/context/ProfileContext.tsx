import React, { createContext, useContext, useState, useEffect } from 'react'

import { useCookies } from 'react-cookie'

import { ProfileProviderProps, ProfileData, User } from '@/types'

const ProfileContext = createContext({} as ProfileData)

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
    const [user, setUser] = useState<User>({
        name: 'Salomao Souza',
        currentLevel: 1,
        currentXP: 0,
        profilePic: 'https://github.com/xSallus.png',
        challengesCompleted: 0,
        nextLevelXP: 400
    })

    const [ cookies, setCookie ] = useCookies(['user'])

    const updateProfile = (level:number, xp:number, numberOfChallenges:number) => {
        setUser({
            name: user.name,
            profilePic: user.profilePic,
            currentLevel:level,
            currentXP:xp,
            challengesCompleted: numberOfChallenges,
            nextLevelXP: Math.pow((user.currentLevel+1)*4, 2)
        })
    }

    useEffect(()=>{
        setCookie('user', JSON.stringify(user))
    }, [user])

    useEffect(()=>{
        setCookie('user', JSON.stringify(user))
    }, [])

    return (
        <ProfileContext.Provider value={{
            updateProfile
        }}>
            { children}
        </ProfileContext.Provider>
    )
}

export default function useProfile() {
    return useContext(ProfileContext)
}
