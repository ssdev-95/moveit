import style from '../styles/components/Profile.module.css';
import {useContext} from 'react';
import { ChallengesContext } from '../context/ChallengesContext';

export function Profile() {
    const { level } = useContext(ChallengesContext)
    return(
        <div className={style.profileContainer}>
            <img src="http://github.com/xSallus.png" alt="xSallus"/>
            <div>
                <strong>Salomao Souza</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}