import styles from '../styles/components/ExperienceBar.module.css';

function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div >
                <div style={{ width: '50%' }}>
                    <span style={{ left: '50%'}} className={`${styles.currentExperience}`}>300 XP</span>
                </div>
            </div>
            <span>600 xp</span>
        </header>
    )
};

export default ExperienceBar;