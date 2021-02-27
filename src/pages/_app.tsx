import '../styles/global.css';
import { ChallengesProvider } from '../contexts/ChallengeContexts';


function Moveit({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default Moveit
