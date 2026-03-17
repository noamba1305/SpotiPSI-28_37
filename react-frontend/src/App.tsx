
import './AppStyles'
import Header from './components/Header/Header.tsx';
import MainSection from './components/MainSection/MainSection.tsx';
import Player from './components/Player/Player.tsx';
import useStyles from './AppStyles.ts';

function App() {
  const { classes } = useStyles();

  return (
    <div className={`${classes.appContainer}`}>
      <Header />
      <MainSection />
      <Player />
    </div>
  )
}

export default App

