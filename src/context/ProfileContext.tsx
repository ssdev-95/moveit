import React, { createContext, useContext, useState, useEffect } from 'react'

import { ProfileProviderProps, ProfileData, User } from '@/types'

const ProfileContext = createContext({} as ProfileData)

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
    const [userData, setUserData] = useState({
        name: 'Salomao Souza',
        avatar: 'https://github.com/xSallus.png',
        baseXP: 0,
        level: 1,
        completedChallenges: 0
    })

    //NextLeveXP Base Calculus
    //Math.pow((userData.level+1)*4, 2)

    return (
        <ProfileContext.Provider value={{}}>
            { children }
        </ProfileContext.Provider>
    )
}

export default function useProfile() {
    return useContext(ProfileContext)
}
