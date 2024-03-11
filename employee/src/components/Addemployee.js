import * as React from 'react';
import { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Card, CardContent } from '@mui/material';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, AppBar, Toolbar, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import login from './login.png';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [position, setPosition] = useState('');
  const [managerId, setManagerId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      employeeId,
      position,
      managerId,
      email,
      password
    };
    console.log(data);
    axios.post('http://localhost:5000/insertEmployee', data)
      .then((response) => {
        console.log(response.data);
      })
      .catch(err => {
        console.log("Error in posting data: " + err.message);
        setError("Failed to add employee. Please try again.");
      });
  };

  return (
    <div>
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
    <Card style={{ minWidth: 275, backgroundColor: '#e0f2f1', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 4px 2px rgba(0, 0, 0, 0.14), 0px 8px 3px rgba(0, 0, 0, 0.12)' }}>
      <CardContent style={{ padding: 24 }}>
        <form onSubmit={handleSubmit}>
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel htmlFor="employeeId">Employee ID</InputLabel>
            <Input
              id="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel htmlFor="position">Position</InputLabel>
            <Input
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel htmlFor="managerId">Manager ID</InputLabel>
            <Input
              id="managerId"
              value={managerId}
              onChange={(e) => setManagerId(e.target.value)}
              required
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ marginBottom: 16 }}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: 2 }}>
            Add Employee
          </Button>
          {error && (
            <FormHelperText error style={{ marginTop: 2 }}>
              {error}
            </FormHelperText>
          )}
        </form>
      </CardContent>
    </Card>
    </div>
  );
};

export default AddEmployee;
