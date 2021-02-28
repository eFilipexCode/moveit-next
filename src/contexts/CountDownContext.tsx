import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengeContexts";

interface CountDownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
};

interface CountDownProviderProps {
    children: ReactNode
}

export const CountDownContext = createContext({} as CountDownContextData);

export function CountDownProvider({ children }: CountDownProviderProps) {
    let countDownTimeOut: NodeJS.Timeout;

    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    function startCountDown() {
        setIsActive(true);
    };

    function resetCountDown() {
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setTime(25 * 60);
        setHasFinished(false);
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
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountDownContext.Provider>
    );
}