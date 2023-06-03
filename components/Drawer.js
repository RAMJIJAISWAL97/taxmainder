import classes from 'styles/Drawer.module.css';

const Drawer = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div className={classes.div}></div>
        <div className={classes.div}></div>
        <div className={classes.div}></div>
    </div>
);

export default Drawer;