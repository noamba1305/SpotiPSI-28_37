import "./MainSectionStyles"
import Sidebar from "./Sidebar/Sidebar";
import PageContent from "./PageContent/PageContent.tsx";
import useStyles from "./MainSectionStyles";

const MainSection = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.mainSectionContainer}>
            <Sidebar />
            <PageContent />
        </div>

    )
}

export default MainSection;