import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import green_check from '../resources/green_check.gif'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ContactForm() {
    const [open, setOpen] = React.useState(false);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const subjects = ['add a new song', 'add a new artist', 'report song or artist which offends you']
    const [inquirysubject, setInquierySubject] = React.useState('add a new song');
    const [formsent, setFormsent] = React.useState(true)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInquierySubject(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email_regex = /\S+@\S+\.\S+/
        const data = new FormData(event.currentTarget);
        const { email } = event.target as typeof event.target & {
            email: { value: string }
        }
        if (email_regex.test(email.value) === true) {
            setFormsent(false)
            console.log({
                first_name: data.get('firstName'),
                last_name: data.get('lastName'),
                email: data.get('email'),
                subject: inquirysubject,
                message: data.get('customer_message'),
            });
        }
        else
        setOpen(true)
    }
        ;
    return (
        formsent ? <Container maxWidth="sm">
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Email not valid
                </Alert>
            </Snackbar>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant='h3'>Contact us</Typography>
                <Typography variant='h5'>type here your inquiry</Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Box component="form" width="100%"
                                noValidate
                                autoComplete="off">
                                <TextField
                                    fullWidth
                                    id="outlined-select-currency"
                                    select
                                    label="Select"
                                    value={inquirysubject}
                                    onChange={handleChange}
                                >
                                    {subjects.map((option, index) => (
                                        <MenuItem key={index} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                multiline={true}
                                rows={5}
                                required
                                fullWidth
                                id="customer_message"
                                label="Your inquiry"
                                name="customer_message"
                                placeholder='Type here your inquiry details'
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Send form
                    </Button>

                </Box>
            </Box>
        </Container>
            : <Container maxWidth='sm'>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant='h3'>inquiry was sent</Typography>
                    <img src={green_check} width={500} height={500} alt=''></img>
                </Box>
            </Container>
    );
}