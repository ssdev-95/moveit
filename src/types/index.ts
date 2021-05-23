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
  level: number;
  baseXP: number;
  avatar: string;
  completedChallenges: number;
}

export interface ProviderProps {
  children: ReactNode;
}

export interface ProfileContextData {
  userData: User,
  levelUP: ()=>void;
  xpUP: (xp:number)=>void;
  completeChallenge: ()=>void;
}

export interface ChallengesContextData {
  hasChallenge: boolean;
  challenge: Challenge;
  initChallenge: ()=>void;
  handleChallengeEnd: (XPEarned:number, isChallengeCompleted:boolean)=>void;
}

export interface CountdownContextData {
  hasFinished: boolean;
  isActive: boolean;
  splitTime: string[];
  startCountdown: ()=>void;
  resetCountdown: ()=>void;
}

export interface LevelUpModalContextData {
  isLevelingUp: boolean;
  toggleLevelUpModal: ()=>void;
}

export interface ProfileProps {
  user: User;
}

export interface HomeProps {
  user: User;
}

export interface DashboardProps {
  user: User;
}

export interface ExperiencBarProps {
  currentXP: number;
  level: number;
}
