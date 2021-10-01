"use strict";

import React, { useEffect, useState } from 'react';

import { Autocomplete, TextField, Button, Theme } from '@mui/material';

import { createStyles, makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";

import EditorLine from './EditorLine';

import { app_task_add, app_task_edit, app_task_remove } from '../../storage/tasks/tasksActions';

import { fetchUsers } from '../../utils/fetch_utils';
import { BUTTON_LABELS, TASK_LABELS } from '../../utils/text_utils';
import { EMPTY_USER } from '../../utils/utilities';
import { ROUTE } from '../../utils/routes_utils';
import { getTask } from '../../storage/tasks/tasksSelectors';
import { is } from 'immutable';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flex: 1,
      width: '100%',
      padding: 42

    }
  }),
);

const extractId = (location: string): number => {
  let result;
  const splited = location.split("/");
  const id_string = splited[2];
  try {
    const id_int = parseInt(id_string)
    if (isNaN(id_int) === false) {
      result = id_int
    }
  } finally {
    return result

  }
}

const Editor = ({ }) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const id = extractId(location.pathname);

  const task = useSelector(getTask(id), is);

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([]);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const [note, setNote] = useState("")
  const [user, setUser] = useState(EMPTY_USER)

  const loadUsers = () => {
    setLoading(true)
    fetchUsers().then((payload) => {
      setUsers(payload)
    }).finally(() => {
      setLoading(false)
    })
  }

  const apply = () => {
    if (id === undefined) {
      dispatch(app_task_add({
        note, hours, user_id: user.id, user_name: user.name, minutes
      }));
    } else {
      dispatch(app_task_edit({
        id, note, hours, user_id: user.id, user_name: user.name, minutes
      }));
    }
    history.push(ROUTE.DEFAULT)
  }

  const remove = () => {
    dispatch(app_task_remove({ id }))
    history.push(ROUTE.DEFAULT)

  }

  useEffect(() => {
    loadUsers()
  }, [])


  useEffect(() => {
    if (task !== undefined) {
      setUser({ id: task.get("user_id"), name: task.get("user_name") })
      setNote(task.get("note"))
      setHours(task.get("hours"))
      setMinutes(task.get("minutes"))
    } else {
      setUser(EMPTY_USER)
      setNote("")
      setHours(0)
      setMinutes(0)
    }
  }, [task])


  const disabled = user.id < 1 || (hours <= 0 && minutes <= 0) || loading === true || note === ""

  return (
    <div className={classes.container}>
      <EditorLine>
        <Autocomplete
          disablePortal
          id="user_select"
          options={users}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          getOptionLabel={(option) => option.name}
          onChange={(event, value) => {
            setUser(value === null ? EMPTY_USER : value)
          }}
          value={user}

          sx={{ width: '100%' }}
          renderInput={(params) =>
            <TextField
              {...params}
              label={TASK_LABELS.USER}
            />
          }
        />
      </EditorLine>

      <EditorLine>
        <TextField
          id="outlined-basic"
          label={TASK_LABELS.HOURS}
          variant="outlined"
          style={{ flex: 1, marginRight: 12 }}

          value={hours}
          onChange={(event) => {
            const value = event.target.value;
            if ((/^\d+$/).test(value) === true) {
              try {
                const int_value = parseInt(value);
                setHours(int_value)
              } catch (e) {
                console.log('Error on parse string')
              }
            }
          }}
        />
        <TextField
          id="outlined-basic"
          label={TASK_LABELS.MINUTES}
          variant="outlined"
          style={{ flex: 1, marginLeft: 12 }}
          value={minutes}
          onChange={(event) => {
            const value = event.target.value;
            if ((/^\d+$/).test(value) === true) {
              try {
                const int_value = parseInt(value);
                if (int_value > -1 && int_value <= 60) {
                  setMinutes(int_value)
                }
              } catch (e) {
                console.log('Error on parse string')
              }
            }
          }}
        />
      </EditorLine>

      <EditorLine>
        <TextField
          id="outlined-multiline-flexible"
          label={TASK_LABELS.NOTES}
          multiline
          style={{ flex: 1 }}

          maxRows={4}
          value={note}
          onChange={(event) => {
            const value = event.target.value;
            setNote(value)
          }}
        />
      </EditorLine>


      <EditorLine>
        <Button disabled={disabled} onClick={apply}>{BUTTON_LABELS.APPLY}</Button>
        {id !== undefined && (<Button disabled={disabled} style={{ color: "red" }} onClick={remove}>{BUTTON_LABELS.REMOVE}</Button>)
        }
      </EditorLine>
    </div>
  )
}

export default Editor;