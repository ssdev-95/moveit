import style from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    return(
        <div className={style.completedChallengesContainer}>
            <span>Completed Challenges</span>
            <span>23</span>
        </div>
    );
}