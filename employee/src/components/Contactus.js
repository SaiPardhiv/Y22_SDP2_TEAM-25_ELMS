import React from 'react';
import { Container, Grid, Typography, Card, CardContent, TextField, Button } from '@mui/material';

function ContactUs() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Container maxWidth="lg" style={{ marginTop: '10rem' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Contact Information</Typography>
                            <Typography variant="body1">Phone: +1234567890</Typography>
                            <Typography variant="body1">Email: contact@example.com</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Contact Us</Typography>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="message"
                                    label="Message"
                                    name="message"
                                    multiline
                                    rows={4}
                                />
                                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                                    Submit
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid><br></br><br></br><hr></hr>
            <Typography variant="body2" align="center" style={{ marginTop: '2rem' }}>
                © {new Date().getFullYear()} Employee Leave Management System. All rights reserved.
            </Typography>
        </Container>
    );
}

export default ContactUs;
