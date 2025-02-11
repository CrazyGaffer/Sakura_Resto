import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link as ScrollLink } from 'react-scroll';

const navItems = ['Home', 'About', 'Menu', 'Events', 'Contact'];

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton>
                            <ScrollLink
                                to={item.toLowerCase()}
                                smooth={true}
                                offset={-70}  // adjust if you have a fixed navbar height
                                duration={500}
                            >
                                <ListItemText primary={item} />
                            </ScrollLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" className="navbar-appbar">
                <Toolbar className="navbar-toolbar">
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className="navbar-title"
                    >
                        Sakura Resto
                    </Typography>
                    {!isMobile &&
                        navItems.map((item) => (
                            <Button key={item} className="navbar-button">
                                <ScrollLink
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={150}
                                >
                                    {item}
                                </ScrollLink>
                            </Button>
                        ))}
                    {isMobile && (
                        <IconButton
                            size="large"
                            edge="end"
                            className="navbar-menu-icon"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
            </Drawer>
        </Box>
    );
};

export default Navbar;
