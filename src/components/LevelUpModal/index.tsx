import style from '@/styles/components/LevelUpModal.module.css';
import { ChallengesContext } from '@/context/ChallengesContext';
import { useContext } from 'react';

export function LevelUPModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext)

    return (
        <div className={style.overlay}>
            <div className={style.container}>
                <header>{level}</header>

                <strong>Congratulations</strong>
                <p>You acquired a new level</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="icons/close.svg" alt="Close Modal"/>
                </button>
            </div>
        </div>
    );
}