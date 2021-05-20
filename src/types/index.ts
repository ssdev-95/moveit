import { ReactNode } from "react";

export interface Challenge {
  type?: string;
  description?: string;
  amount?: number;  
  uuid?: string;
  pic?: string;
}

export interface User {
  name: string;
  currentLevel: number;
  currentXP: number;
  profilePic: string;
  challengesCompleted: number;
  nextLevelXP: number;
}

export interface ChallengesContextData {
  hasChallenge: boolean;
  challenge: Challenge;
  initChallenge: ()=>void;
  handleChallengeEnd: (XPEarned:number, isChallengeCompleted:boolean)=>void;
}

export interface ChallengesProviderProps {
  children: ReactNode;
}

export interface ChallengesCompletedProps {
  challengesCompleted: number;
}
export interface CountdownContextData {}

export interface CountdownProviderProps {
  children: ReactNode;
}

export interface HomeProps {
  user: User;
}

export interface LevelUpModalContextData {
  currentLevel: number;
  isLevelUp: boolean;
  upALevel: ()=>void;
  toggleLevelUpModal: ()=>void;
}

export interface LevelUpModalProviderProps {
  children: ReactNode;
}

export interface ProfileData {
  updateProfile: (level:number, xp:number, numberOfChallenges:number)=>void;
}

export interface ProfileProviderProps {
  children: ReactNode;
}

export interface ProfileProps {
  user: User;
}

export interface DashboardProps {
  user: User;
}

export interface ExperiencBarProps {
  currentXP: number;
  nextLevelXP: number;
}
