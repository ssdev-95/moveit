import React from 'react'

import CompletedChallenges from '@/components/CompletedChallenges'
import Countdown from '@/components/Countdown'

import { ProfileContainer, Avatar } from '@/components/Profile/profile.style'

export default function Profile() {
    const user = {
        name: 'Salomao de Souza',
        picURI: 'https://github.com/xSallus.png',
        currentLevel: 1,
        completedChallenges: 0

    }

    return(
        <ProfileContainer>
            <Avatar>
                <img src={user.picURI} alt="Profile avatar"/>
                <div>
                    <span>{user.name}</span>
                    <div>
                        <img src="icons/level.svg" alt="Level icon" />
                        <span>Level {user.currentLevel}</span>
                    </div>
                </div>
            </Avatar>
            <CompletedChallenges
              challengesCompleted={user.completedChallenges}
            />
            <Countdown />
        </ProfileContainer>
    );
}