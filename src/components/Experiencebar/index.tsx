import { Header, Bar, Progress, CurrentExperience } from '@/components/Experiencebar/experiencebar.style'
export default function Experiencebar() {
  const currentXP = 0
  const nextLevelXP = 400
  
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
