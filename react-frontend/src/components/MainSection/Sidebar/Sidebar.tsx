import SidebarItem from "./SidebarItem/SidebarItem.tsx";
import useStyles from "./SidebarStyles.ts";

interface Props {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const Sidebar = (props: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.bar}>
            <SidebarItem title="Songs" icon="songs" isActive={props.currentPage === 'songs'} func={() => props.setCurrentPage('songs')} />
            <SidebarItem title="Playlists" icon="playlists" isActive={props.currentPage === 'playlists'} func={() => props.setCurrentPage('playlists')} />
            <SidebarItem title="Favorites" icon="favorites" isActive={props.currentPage === 'favorites'} func={() => props.setCurrentPage('favorites')} />
        </div>
    );
};

export default Sidebar;