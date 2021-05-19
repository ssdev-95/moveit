import React from 'react'

import { CompletedChallengesContainer } from '@/components/CompletedChallenges/completedchallenges.style'

import { ChallengesCompletedProps } from '@/types'

export default function CompletedChallenges({ challengesCompleted }: ChallengesCompletedProps) {

    return(
        <CompletedChallengesContainer>
            <span>{'Challenges completed:'}</span>
            <span>{challengesCompleted}</span>
        </CompletedChallengesContainer>
    );
}