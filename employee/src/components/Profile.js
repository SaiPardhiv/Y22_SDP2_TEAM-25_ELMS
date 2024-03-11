import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControl, InputLabel, Input, FormHelperText, Button, Card} from '@mui/material';
import { Drawer, List, ListItem, ListItemIcon, ListItemText,AppBar, Toolbar, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function ActionAreaCard() {
    const drawerWidth = 240;
  const styles = {
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: 1201,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: '24px',
      textAlign: 'center', // Aligning content to center
    },
    image: {
      maxWidth: '100%', // Ensuring the image fits within the container
    },
  };
  return (
    
    <div style={{ marginTop: '10vh' }}>
        <AppBar position="fixed" style={styles.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://th.bing.com/th/id/OIP.66elZ0rdKa61JlWQw8G7XgHaGf?w=196&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pardhiv
            </Typography>
            <Typography variant="body2" color="text.secondary">
              employee id : 2029<br></br>email : pardhiv@gmail.com
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
