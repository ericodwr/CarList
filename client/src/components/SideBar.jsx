import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

export default function SideBar({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Top Nav */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: 'white',
        }}
      >
        <Box display={'flex'} padding="1rem">
          <Box flexGrow={3}></Box>
          <Box>
            <img src="/assets/icons/right.svg" alt="right" />
          </Box>
        </Box>
      </AppBar>

      {/* Side Nav */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#323435',
            color: '#8C8C8C',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider sx={{ backgroundColor: 'white' }} />
        <List sx={{ mx: '1rem' }}>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent="space-between"
          >
            <ListItem key={'Car'} disablePadding>
              <ListItemButton
                sx={{ backgroundColor: '#0F5EDD', color: 'white' }}
              >
                <ListItemIcon>
                  <img src="/assets/icons/carIcon.svg" alt="car" />
                </ListItemIcon>
                <ListItemText primary={'Car Brand'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={'folder'} disablePadding>
              <Accordion sx={{ backgroundColor: 'inherit', color: '#8C8C8C' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box display={'flex'}>
                    <img src="/assets/icons/pages.svg" alt="pages" />
                    <Typography mx="2rem">Folder</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Menu Item</Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>Menu Item</Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>Menu Item</Typography>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          </Box>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
