import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import Logo from '../assets/logotransparent.png'; // Import the logo image

const pages = ['Admin Dashboard']; // Updated to only show Admin Dashboard
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function AdminNav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        setIsNavOpen(true); // Open navigation tabs when menu icon is clicked
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        setIsNavOpen(false); // Close navigation tabs when menu icon is clicked again
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#151e2f' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleOpenNavMenu}
                        sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{
                            display: 'flex',
                            maxWidth: '150px', // Adjust the maximum width as needed
                            maxHeight: '80px', // Adjust the maximum height as needed
                            marginRight: '1rem'
                        }}
                    />
                    <Box sx={{ flexGrow: 1, display: { xs: isNavOpen ? 'block' : 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                     {/* Search Bar */}
                     <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <div style={{ position: 'absolute', left: '10px' }}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search..."
                            value={searchValue}
                            onChange={handleSearchChange}
                            style={{ paddingLeft: '30px', color: 'white' }}
                        />
                    </div>
                    
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Admin" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                   
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AdminNav;
