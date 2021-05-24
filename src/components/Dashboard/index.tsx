import React from 'react'
import ChallengeBox from '@/components/ChallengeBox'
import Profile from '@/components/Profile'
import { DashContainer } from '@/styles/components/dash.style'
import { DashboardProps } from '@/types'

export default function Dashboard({user}: DashboardProps) {
    return(
        <DashContainer>
            <Profile user={user} />
            <ChallengeBox />
        </DashContainer>
    )
}
