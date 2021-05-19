import React from 'react'
import { ChallengeContainer } from '@/components/ChallengeBox/challengebox.style'

export default function ChallengeBox() {
    const emptyChallenges = (
        <>
            <span>Start a cycle to receive challenges</span>
            <img src="icons/level-up.svg" alt="Empty challenge" />
            <span>Go up a level by completing challenges</span>
        </>
    )

    return (
        <ChallengeContainer>{emptyChallenges}</ChallengeContainer>
    );
}