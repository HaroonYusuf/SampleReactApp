import './UsersView.css'
import React, { useState, useEffect, useMemo } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { UserCard } from './UserCard/UserCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function UsersView() {

    // const [user, setUser] = useState([]);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    // const users = [];
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [open, setOpen] = React.useState(false);
    const [users, setUsers] = useState([])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        textCenter: 'center'
    };

    useEffect(() => {
        // const users = JSON.parse(window.localStorage.getItem('users'));
        // if (users && Array.isArray(users)) {
        //     setUsers(users);
        // }
    }, [])

    useMemo(() => {
        const users = JSON.parse(window.localStorage.getItem('users'));
        if (users && Array.isArray(users)) {
            setUsers(users);
        }
        console.log(users);
    }, []);

    function saveUser() {
        let item = { name, address, email, password, gender }
        item.id = Math.random();
        item.isSummaryView = true;
        users.push(item);
        window.localStorage.setItem('users', JSON.stringify(users));
        setUsers(users);
        setOpen(false);
        console.log(users);
    }

    return (
        <>
            <Button sx={{ mt: 3 }} variant='outlined' onClick={() => setOpen(true)}>New user</Button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='center'
                    component="form"
                    sx={style}
                    noValidate
                    autoComplete="off"
                >
                    <Typography sx={{ mb: 1 }} id="modal-modal-title" variant="h6" component="h2">
                        Create New User
                    </Typography>
                    <TextField fullWidth sx={{ mb: 1 }} label="Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} /><br />
                    <TextField fullWidth sx={{ mb: 1 }} label="Address" variant="standard" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
                    <TextField fullWidth sx={{ mb: 1 }} label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <TextField fullWidth sx={{ mb: 3 }} label="Password" variant="standard" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            value={gender}
                            label="Gender"
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <MenuItem value={1}>Male</MenuItem>
                            <MenuItem value={2}>Female</MenuItem>
                            <MenuItem value={3}>Other</MenuItem>
                        </Select>
                    </FormControl><br />

                    <Button onClick={saveUser} variant="contained">Create</Button>
                </Box>
            </Modal>

            <br /><br /><hr /><br />

            <Grid container spacing={3} sx={{ pl: 3, pr: 3, pb: 3 }}>
                {
                    users.map((user) => (
                        <Grid item key={user.id} xs={12} md={4} lg={3} >
                            <UserCard key={user.id} user={user} />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}
export default UsersView;   