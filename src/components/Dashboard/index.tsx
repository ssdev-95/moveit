import React from 'react'
import ChallengeBox from '@/components/ChallengeBox'
import Profile from '@/components/Profile'
import { DashContainer } from '@/components/Dashboard/dash.style'
import { DashboardProps } from 'root/src/types'

export default function Dashboard({user}: DashboardProps) {
    return(
        <DashContainer>
            <Profile user={user} />
            <ChallengeBox />
        </DashContainer>
    )
}
