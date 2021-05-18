import { ReactNode } from "react";

export interface Challenge {
  type: string;
  description: string;
  amount: number;
  price: number;
  accessibility: number;
  participants: number;
  link: string;
  key: string;
}

export interface ChallengesContextData {}

export interface ChallengesProviderProps {
  children: ReactNode;
}

export interface CountdownContextData {}

export interface CountdownProviderProps {
  children: ReactNode;
}

export interface HomeProps {
  level: number;
  currentXp: number;
  challengesCompleted: number;
}
