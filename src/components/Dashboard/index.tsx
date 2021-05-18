import React from 'react'
import ChallengeBox from '@/components/ChallengeBox'
import Profile from '@/components/Profile'
import { DashContainer } from '@/components/Dashboard/dash.style'

export default function Dashboard() {
    return(
        <DashContainer>
            <ChallengeBox />
            <Profile />
        </DashContainer>
    )
}
