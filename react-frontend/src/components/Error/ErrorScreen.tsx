import useStyles from './errorScreenStyles.ts'
import errorImg from '../../assets/error.jpg'

const ErrorScreen = () => {
    const { classes } = useStyles();
  return (
    <>
      <div className={`${classes.errorScreenContainer}`}>
        <img src={errorImg} alt="" className={`${classes.image}`}/>
        <h1 className={`${classes.title}`}>...עצוררר!! עשית משהו לא טוב</h1>
      </div>
    </>
  )
}

export default ErrorScreen
