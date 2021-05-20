import { Header, Bar, Progress, CurrentExperience } from '@/components/Experiencebar/experiencebar.style'

import { ExperiencBarProps } from '@/types'

export default function Experiencebar({ currentXP, nextLevelXP }:ExperiencBarProps) {
  
  return (
    <Header>
      <span>0 xp</span>
      <Bar>
        <Progress style={{ width: `${(currentXP/nextLevelXP)*100}%` }} />
      </Bar>
      <span>{nextLevelXP} xp</span>
      <CurrentExperience>{currentXP} xp</CurrentExperience>
    </Header>
  );
}
