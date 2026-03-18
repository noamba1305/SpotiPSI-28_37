import useStyles from "./SidebarItemStyles.ts";
import  { Home, LibraryMusic, Favorite } from '@mui/icons-material'

interface Props {
    title: string;
    icon: 'songs' | 'playlists' | 'favorites';
    isActive: boolean;
    func: () => void;
}

const SidebarItem = (props: Props) => {
    const { classes } = useStyles();

    const pressed = () => {
        props.func();
        
    };

    return (
        <div className={`${classes.SidebarItemContainer} ${props.isActive ? classes.activeItem : ''}`} onClick={pressed}>
            {props.icon === 'songs' && <Home />}
            {props.icon === 'playlists' && <LibraryMusic />}
            {props.icon === 'favorites' && <Favorite />}
            <span>{props.title}</span>
        </div>

    )
}

export default SidebarItem;

