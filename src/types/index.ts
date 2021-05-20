import { ReactNode } from "react";

export interface Challenge {
  type?: string;
  description?: string;
  amount?: number;  
  uuid?: string;
  pic?: string;
}

export interface ChallengesContextData {
  hasChallenge: boolean;
  challenge: Challenge;
  parseChallenge: ()=>Promise<void>;
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

export interface HomeProps {}

export interface LevelUpModalContextData {
  isLevelUp: boolean;
  toggleLevelUpModal: ()=>void;
}

export interface LevelUpModalProviderProps {
  children: ReactNode;
}
