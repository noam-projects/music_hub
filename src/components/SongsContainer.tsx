import { useState } from 'react'
import { Box } from '@mui/material'
import { Button } from '@mui/material'
import { Drawer } from '@mui/material'
import GenreItem from './GenreItem'
import { Typography } from '@mui/material'
import { database } from '../resources/database'
import { Stack } from '@mui/material'
import { AudioCard } from 'material-ui-player'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
const drawerWidth = 240;

function SongsContainer() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [abstract, setAbstract] = useState(false);
    const [epic, setEpic] = useState(false)
    const [nature, setNature] = useState(false)
    const nothing_is_selected: boolean = ((abstract === false) && (epic === false) && (nature === false))
    let selected_genres: string[] = []
    if (abstract)
        selected_genres.push('abstract')
    if (epic)
        selected_genres.push('epic')
    if (nature)
        selected_genres.push('nature')
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box>
            <Box display='flex' flexDirection='column'>
                <Typography sx={{ mt: 8, mb: 5, color: '#fff', fontSize: '30px', textAlign: 'center' }}>Select genres to filter</Typography>
                <GenreItem label_name='Abstract' change_state_function={() => setAbstract(!abstract)}></GenreItem>
                <GenreItem label_name='Epic' change_state_function={() => setEpic(!epic)}></GenreItem>
                <GenreItem label_name='Nature' change_state_function={() => setNature(!nature)}></GenreItem>
            </Box>
            <Box display='flex' flexDirection='column'>
                <Typography sx={{ mt: 2, color: '#fff', fontSize: '30px', textAlign: 'center' }}>Select song duration</Typography>
            </Box>
        </Box>
    )
    return (
        <Box width='100vw' sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <Box sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}>
                <Button sx={{ mt: 8, mr: 2, display: { sm: 'none' } }} variant="contained" onClick={handleDrawerToggle}>click here to open drawer</Button>
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
            <Stack direction='column' sx={{ width: { xs: '100vw', sm: 'calc(100vw - 240px)' }, mt: { xs: 3, sm: 8 } }}>
                {database.map((item, index) => {
                    return (
                        (nothing_is_selected || selected_genres.includes(item.genre)) ? <Box key={index}>
                            <Stack direction='row' justifyContent='space-between' sx={{ mt: 1, mr: { xl: 2 } }}>
                                <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '0.2rem', fontFamily: 'monospace', ml: 3, mt: 5 }}>
                                    {item.song_name}
                                    <Stack direction="column" alignItems="center" >
                                        <a href={item.song_path} download>
                                            <CloudDownloadOutlinedIcon href={item.song_path} fontSize="large" sx={{ ml: 4 }} />
                                        </a>
                                    </Stack>
                                </Typography>
                                <img alt='song pic' width='100vw' height='100vh' src={item.thumbnail_path}></img>
                            </Stack>
                            <AudioCard src={item.song_path}></AudioCard>
                        </Box> : null
                    )
                }
                )}
            </Stack>
        </Box>
    );
}
export default SongsContainer;