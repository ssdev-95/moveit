import { ReactNode } from 'react'

export interface Challenge {
    "type": string,
    "description": string,
    "amount": number,
    "price": number,
    "accessibility": number,
    "participants": number,
    "link": string,
    "key": string
  }

export interface ChallengesContextData {
    level:number;
    currentXp:number;
    challengesCompleted:number;
    xpForNextLevel:number;
    levelUp:() => void;
    startNewChallenge:() => Promise<void>;
    activeChallenge: Challenge;
    resetChallenge:() => void;
    completeChallenge:() => void;
    closeLevelUpModal:() => void;
}

export interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentXp: number;
    challengesCompleted: number;
}

export interface CountdownContextData {
    minutes:number;
    seconds:number;
    hasFinished:boolean;
    isActive:boolean;
    startCountdown:() => void;
    resetCountdown:() => void;
}

export interface CountdownProviderProps {
    children: ReactNode
}

export interface HomeProps {
    level: number;
    currentXp: number;
   challengesCompleted: number;
}
