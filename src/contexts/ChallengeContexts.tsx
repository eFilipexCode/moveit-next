import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface ChallegesProviderProps {
    children: ReactNode;
};

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
};

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    completeChallenge: () => void;
};

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallegesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrenceExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    };

    function levelUp() {
        setLevel(level + 1);
    };

    function resetChallenge() {
        setActiveChallenge(null);
    };

    function completeChallenge() {
        if (!activeChallenge)
            return;
        const { amount } = activeChallenge;
        let finalExperience = currentExperience + amount;
        
        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrenceExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    };

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            completeChallenge
        }}>
            {children}
        </ChallengesContext.Provider>
    )
};