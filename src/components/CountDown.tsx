import { Fragment, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/CountDown.module.css';

export default function CountDown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    let countDownTimeOut: NodeJS.Timeout;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setIsActive(true);
    };

    function resetCountDown() {
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setTime(25 * 60);
    };

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        };
    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>

            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={`${styles.startCountDown}`}>
                    Ciclo encerrado
                </button>
            ) : (<Fragment>
                {isActive ? (
                    <button onClick={resetCountDown} className={`${styles.startCountDown} ${styles.countDownButtonActive}`}>
                        Abandonar ciclo
                    </button>
                ) : (
                        <button onClick={startCountDown} className={styles.startCountDown}>
                            Iniciar um ciclo
                        </button>
                    )}
            </Fragment>)}
        </div>
    );
};