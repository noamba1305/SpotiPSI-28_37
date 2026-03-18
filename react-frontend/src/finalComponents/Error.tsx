import ErrorScreen from '../components/Error/ErrorScreen.tsx';
import useStyles from '../AppStyles.ts';

const Error = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <ErrorScreen />
    </div>
  );
};

export default Error;