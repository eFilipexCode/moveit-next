import { Fragment, useContext } from 'react';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';

export default function CountDown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown
    } = useContext(CountDownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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