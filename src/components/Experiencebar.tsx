import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import style from '../styles/components/ExperienceBar.module.css';

export function Experiencebar() {
  const { currentXp, xpForNextLevel } = useContext(ChallengesContext)
  const percentToNextLevel = Math.round(currentXp*100)/xpForNextLevel

  return (
    <header className={ style.experienceBar }>
      <span>0 xp</span>
      <div >
        <div style={{ width: `${percentToNextLevel}%` }}/>

        <span className={ style.currentExperience } style={{ left: `${percentToNextLevel}%` }}>
          {currentXp} xp
        </span>
      </div>
      <span>{xpForNextLevel} xp</span>
    </header>
  );
}
