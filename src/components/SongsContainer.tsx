import { useState } from 'react'
import { Box } from '@mui/material'
import { Button } from '@mui/material'
import { Drawer } from '@mui/material'
import GenreItem from './GenreItem'
import { Typography } from '@mui/material'
import { database } from '../resources/database'
import { Stack } from '@mui/material'
import { AudioCard } from 'material-ui-player'
const drawerWidth = 240;

function SongsContainer() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [rock, setRock] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box display='flex' flexDirection='column'>
            <Typography sx={{ mb: 5, color: '#fff', fontSize: '30px', textAlign: 'center' }}>Select genres to filter</Typography>
            <GenreItem label_name='Rock' change_state_function={() => setRock(!rock)}></GenreItem>
        </Box>
    )
    return (
        <Box width='100vw' sx={{ display: 'flex',flexWrap:'wrap',justifyContent:'flex-end' }}>
            <Box sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}>
                <Button sx={{ mr: 2, display: { sm: 'none' } }} variant="contained" onClick={handleDrawerToggle}>click here to open drawer</Button>
            </Box>
            <Box sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: 'auto', zIndex: 1, bgcolor: '#191b26' },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: 'auto', zIndex: 1, bgcolor: '#191b26' },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
            <Stack direction='column' sx={{width:{xs:'100vw',sm:'calc(100vw - 240px)'}}}>
                {database.map((item)=>
                {
                    //return <AudioCard src={item.song_path}></AudioCard>
                    return <AudioCard src={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"}></AudioCard>
                }
                )}
            </Stack>
        </Box>
    );
}
export default SongsContainer;