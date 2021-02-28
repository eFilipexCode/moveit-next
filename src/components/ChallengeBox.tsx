import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountDown } = useContext(CountDownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountDown();
    };

    function handleChallengeFailed() {
        resetChallenge();
        resetCountDown();
    };

    return (
        <div className={styles.ChallengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>
                        Ganhe {activeChallenge.amount}xp
                    </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            onClick={handleChallengeFailed}
                            type="button"
                            className={styles.challengeFailedButton}

                        >Falhei</button>
                        <button
                            onClick={handleChallengeSucceeded}
                            type="button"
                            className={styles.challengeSucceededButton}
                        >Completei</button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio!</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                Avance de level completando desafios.
            </p>
                    </div>
                )}
        </div >
    );
};