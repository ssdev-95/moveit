import React from 'react'

import CompletedChallenges from '@/components/CompletedChallenges'
import Countdown from '@/components/Countdown'

import { ProfileContainer, Avatar } from '@/styles/components/profile.style'
import { ProfileProps } from 'root/src/types';

export default function Profile({ user }: ProfileProps) {

    return(
        <ProfileContainer>
            <Avatar>
                <img src={user.avatar} alt="Profile avatar"/>
                <div>
                    <span>{user.name}</span>
                    <div>
                        <img src="icons/level.svg" alt="Level icon" />
                        <span>Level {user.level}</span>
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