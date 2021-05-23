import React from 'react'

import useChallenge from 'root/src/components/context/ChallengesContext'

import { ChallengeContainer, ChallengeDetail, Header, Actions } from '@/components/ChallengeBox/challengebox.style'

export default function ChallengeBox() {
    const { challenge, hasChallenge, handleChallengeEnd } = useChallenge()
    
    const emptyChallenge = (
        <>
            <span>Start a cycle to receive challenges</span>
            <img src="icons/level-up.svg" alt="Empty challenge" />
            <span>Go up a level by completing challenges</span>
        </>
    )

    const challenging = (
        <>
            <Header>
                <span>{`Receive ${challenge.amount} xp`}</span>
            </Header>
            <img src={challenge.pic} alt="Challenge icon" />
            <ChallengeDetail>
                <h2>{challenge.type}</h2>
                <span>{challenge.description}</span>
            </ChallengeDetail>
            <Actions>
                <button type="button" onClick={()=>handleChallengeEnd(0, false)} >Failed</button>
                <button type="button" onClick={()=>handleChallengeEnd(challenge.amount, true)} >Succeded</button>
            </Actions>
        </>
    )

    return (
        <ChallengeContainer key={challenge.uuid}>{!hasChallenge?emptyChallenge:challenging}</ChallengeContainer>
    );
}