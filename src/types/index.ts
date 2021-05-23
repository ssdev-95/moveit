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
  nextLevelXP: number;
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
  updateProfileData: (newName: string, newAvatar: string)=>void;
  completeChallenge: ()=>void;
}

export interface ChallengesContextData {
  hasChallenge: boolean;
  challenge: Challenge;
  initChallenge: ()=>void;
  handleChallengeEnd: (isChallengeCompleted:boolean, XPEarned?:number)=>void;
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

export interface ExperiencebarContextData {
  progress: string;
  nextLevelXP: number;
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
