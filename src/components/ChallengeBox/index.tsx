import { useContext } from 'react';
import { ChallengesContext } from '@/context/ChallengesContext';
import { CountdownContext } from '@/context/CountdownContext';

import style from '@/styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)

    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={style.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={style.activeChallenge}>
                    <header>Obtain {activeChallenge.amount} xp</header>
                    <main>
                        <img src={ `icons/${activeChallenge.type}.svg` }alt=""/>
                        <strong>New challenge</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                        type="button"
                        className={style.challengeFailedButton}
                        onClick={handleChallengeFailed}
                        >
                            Failed!
                        </button>
                        <button
                        type="button"
                        className={style.challengeSucceededButton}
                        onClick={handleChallengeSucceeded}>
                            Succeeded!
                        </button>
                    </footer>
                </div>
            ) :(
                <div className={style.challengeNotActive}>
                    <strong>
                        Finalize an cycle to receive a challenge
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt=""/>
                        Go up a level by completing challenges
                    </p>
                </div>
            )}
        </div>
    );
}