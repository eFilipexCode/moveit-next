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
};

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallegesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrenceExperience] = useState(16);
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

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel
        }}>
            {children}
        </ChallengesContext.Provider>
    )
};