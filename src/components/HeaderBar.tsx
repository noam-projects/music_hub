import React from 'react'
import { AppBar } from '@mui/material'
import { Container } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Avatar } from '@mui/material'
import { Box } from '@mui/material'
import logo from '../resources/logo.png'
import { Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem } from '@mui/material'
import { Menu } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material'
import { Stack } from '@mui/material'

function HeaderBar(props:{pos:'fixed'|'relative'}) {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position={props.pos} sx={{ margin: '0' }}>
            <Container maxWidth={false} sx={{width:'100%'}}>
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <a href='/'>
                        <Avatar src={logo}> </Avatar>
                        </a>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            overflow:'visible',
                            ml:10
                        }}
                    >
                        Music Hub
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex ', md: 'none' } }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={anchorElNav ? true : false}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem key={0} onClick={() => navigate("/")}>
                                <Typography>Home</Typography>
                            </MenuItem>
                            <MenuItem key={2} onClick={() => navigate('/contact')}>
                                <Typography>Contact Us</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none', mr: 2 } }}>
                    <a href='/'>
                        <Avatar src={logo}> </Avatar>
                        </a>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            overflow:'visible'
                        }}
                    >
                        Music Hub
                    </Typography>
                    <Stack width='100%' alignItems='center'>
                        <Box sx={{ alignItems:'flex-end',flexGrow: 1, display: { xs: 'none', md: 'flex',lg:'none' } }}>
                            <Button
                                key={0}
                                onClick={() => navigate("/")}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                HOME
                            </Button>
                            <Button
                                key={2}
                                onClick={() => navigate('/contact')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Contact
                            </Button>
                        </Box>
                    </Stack>
                    <Stack width='100%' alignItems='center'>
                        <Box sx={{alignItems:'flex-end', flexGrow: 1, display: { xs: 'none', md: 'none',lg:'flex' } }}>
                            <Button
                                key={0}
                                onClick={() => navigate("/")}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                HOME
                            </Button>
                            <Button
                                key={2}
                                onClick={() => navigate('/contact')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Contact
                            </Button>
                        </Box>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar >
    );
}

export default HeaderBar;
