import { createContext, useState, ReactNode } from 'react';

interface ChallegesProviderProps {
    children: ReactNode;
};

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
};

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallegesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrenceExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function startNewChallenge() {
        console.log(('fekjg;jfhpu;owseogdshjgfdjkdfgshjfdgkfgdjhfdghjfgdhjfgdjh'));
        
    };

    function levelUp() {
        setLevel(level + 1);
    };

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge
        }}>
            {children}
        </ChallengesContext.Provider>
    )
};