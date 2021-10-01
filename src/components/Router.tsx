"use strict";

import React, { useState } from 'react';

import { createStyles, makeStyles } from '@mui/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigator from './Navigation/Navigator';

import { ROUTE } from '../utils/routes_utils';
import Editor from './Editor/Editor';
import Overveiw from './Overview/Overview';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../storage/app/appSelectors';
import { app_login } from '../storage/app/appActions';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';


const useStyles = makeStyles((theme) => createStyles({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
}))

const AppRouter = () => {
  const classes = useStyles();
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const [login, setLogin] = useState("");

  const applyLogin = () => {
    dispatch(app_login(login))
  }

  return (
    <Router>
      <div className={classes.container}>
        <Dialog open={user === ""}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter administrator name
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Administrator Name"
              fullWidth
              variant="standard"
              value={login}
              onChange={(event) => { setLogin(event.target.value) }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={applyLogin}>Login</Button>
          </DialogActions>
        </Dialog>
        {user !== "" && (
          <>
            <Navigator />
            <Switch>
              <Route path={`"/(.*)${ROUTE.EDITOR}/\\d+)(.*)"`} render={() => {
                return (
                  <Editor />
                )
              }} />

              <Route path={ROUTE.EDITOR}>
                <Editor />
              </Route>
              <Route path={ROUTE.DEFAULT}>
                <Overveiw />
              </Route>
            </Switch>
          </>)}
      </div>
    </Router>
  )
}



export default AppRouter;