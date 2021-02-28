import styles from '../styles/components/Profile.module.css';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import { useContext } from 'react';

export default function Profile() {
    const {level} = useContext(ChallengesContext);
    return (
        <div className={`${styles.profileContainer}`}>
            <img src="https://github.com/efilipecode.png" alt="Emanuel Filipe" />
            <div>
                <strong>Emanuel Filipe</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
};