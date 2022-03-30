import logo from './logo.svg';
import './App.css';
import UsersView from './UsersView';
import { BrowserRouter, Route } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { UserCard } from './UserCard/UserCard';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route exact path="/">
          <h1 >User Portal</h1>
          <Button variant="outlined" component={Link} to="/users">
            View Users
          </Button>
        </Route>

        <Route exact path="/users">
          <UsersView />
        </Route>

        <Route
          exact
          path="/users/:id"
          render={
            ({ match }) => {
              const userId = match.params.id;
              const users = JSON.parse(window.localStorage.getItem('users'));
              if (users && Array.isArray(users)) {
                const foundUser = users.find(user => user.id == userId);
                if (foundUser) {
                  console.log(foundUser);
                  foundUser.isSummaryView = false;
                  // return <UserCard user={foundUser} />
                  return (
                    <Grid container spacing={0} sx={{ mx: 'auto', width: 350, mt: 10 }}>
                        <Grid item key={foundUser.id} >
                          <UserCard key={foundUser.id} user={foundUser} />
                        </Grid>
                    </Grid>
                  )
                }
              }
            }
          }
        >
        </Route>

      </BrowserRouter>

    </div>
  );
}

export default App;
