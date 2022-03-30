import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

export const UserCard = ({user}) => {
    return (
        <>
            <Card elevation={3}>
                <CardHeader
                    // action={
                    //   <IconButton>
                    //     <ShareIcon />
                    //   </IconButton>
                    // }
                    title={user.name}
                    subheader={user.email}
                />
                <CardContent>
                    {user.isSummaryView == false &&
                        <div>
                            <Typography variant="body2" color="textSecondary">
                                Address : {user.address}
                            </Typography>

                            <Typography variant="body2" color="textSecondary">
                                Password : {user.password}
                            </Typography>

                            <Typography variant="body2" color="textSecondary">
                                Gender : {user.gender}
                            </Typography>

                            <Button sx={{mt: 2}}
                                variant='contained'
                                component={Link}
                                to="/users"
                            >Back</Button>
                        </div>
                    }

                    {user.isSummaryView &&
                        <Button
                            variant='contained'
                            component={Link}
                            to={{
                                pathname: `/users/${user.id}`
                            }}
                        >View</Button>
                    }
                </CardContent>
            </Card>
        </>
    )
}
