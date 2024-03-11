import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, AppBar, Toolbar, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if using React Router

import RequestLeaveIcon from '@mui/icons-material/Assignment';
import ReminderIcon from '@mui/icons-material/Notifications';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import MyLeavesIcon from '@mui/icons-material/EventNote';
import SettingsIcon from '@mui/icons-material/Settings';

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

function EmployeeDashboard() {

  return (
    <div style={styles.root}>
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
            Employee Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        style={styles.drawer}
        variant="permanent"
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <Toolbar />
        <div style={styles.drawerContainer}>
          <List>
            <ListItem button component={Link} to="/profile">
              <ListItemIcon><ProfileIcon /></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button component={Link} to="/leaves">
              <ListItemIcon><MyLeavesIcon /></ListItemIcon>
              <ListItemText primary="My Leaves" />
            </ListItem>
            <ListItem button component={Link} to="/settings">
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button component={Link} to="/form">
              <ListItemIcon><RequestLeaveIcon /></ListItemIcon>
              <ListItemText primary="Leave Request" />
            </ListItem>
            <ListItem button component={Link} to="/login">
              <ListItemIcon><RequestLeaveIcon /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main style={styles.content}>
        <Toolbar />
        <Container>
          {/* Your dashboard content goes here */}
          <Typography variant="h4" gutterBottom>
            Welcome to Employee Dashboard
          </Typography>
          <Typography variant="body1" paragraph>
            This dashboard allows you to manage your leaves efficiently and stay updated with reminders.
          </Typography>
          <img src="https://www.officetimer.com/wp-content/uploads/2019/11/Leave-Management-System.png" alt="Your Image" style={styles.image} />
        </Container>
      </main>
    </div>
  );
}

export default EmployeeDashboard;
