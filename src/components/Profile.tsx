import style from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={style.profileContainer}>
            <img src="http://github.com/xSallus.png" alt="xSallus"/>
            <div>
                <strong>Salomao Souza</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level 1
                </p>
            </div>
        </div>
    );
}