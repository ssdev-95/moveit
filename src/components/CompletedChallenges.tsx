import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import style from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext)

    return(
        <div className={style.completedChallengesContainer}>
            <span>Completed Challenges</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}