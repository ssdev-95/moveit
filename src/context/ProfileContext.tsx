import React, { createContext, useContext, useState, useEffect } from 'react'

import { useCookies } from 'react-cookie'

import { ProfileProviderProps, ProfileData, User } from '@/types'
import useModal from '@/context/LevelUpModalContext'
import useChallenge from '@/context/ChallengesContext'

const ProfileContext = createContext({} as ProfileData)

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
    const { currentLevel } = useModal()
    const { userXP, completedChallenges } = useChallenge()

    const [user, setUser] = useState<User>({
        name: 'Salomao Souza',
        currentLevel: 1,
        currentXP: 0,
        profilePic: 'https://github.com/xSallus.png',
        challengesCompleted: 0,
        nextLevelXP: Math.pow((1 + 1) * 4, 2)
    })

    const [cookies, setCookie] = useCookies(['user'])

    const updateProfile = (level:number, completed:number, newXP:number) => {
        setUser({
            name: user.name,
            profilePic: user.profilePic,
            currentLevel: level,
            currentXP: newXP,
            challengesCompleted: completed,
            nextLevelXP: Math.pow((user.currentLevel + 1) * 4, 2)
        })
    }

    useEffect(() => {
        updateProfile(currentLevel, completedChallenges, userXP)
    }, [userXP, currentLevel, completedChallenges])

    useEffect(() => {
        setCookie('user', JSON.stringify(user))
    }, [user])

    useEffect(() => {
        setCookie('user', JSON.stringify(user))
    }, [])

    return (
        <ProfileContext.Provider value={{}}>
            { children}
        </ProfileContext.Provider>
    )
}

export default function useProfile() {
    return useContext(ProfileContext)
}
