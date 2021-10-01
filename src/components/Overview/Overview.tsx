"use strict";

import React from 'react';


import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TaskCard from './TaskCard';

import { getTasks } from '../../storage/tasks/tasksSelectors'
import { ROUTE } from '../../utils/routes_utils';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: 'calc(100% - 48px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 24,

    }
  }),
);

const Overveiw = ({ }) => {

  const classes = useStyles();
  const history = useHistory()
  const tasks = useSelector(getTasks)

  const openDetails = (id: number) => {
    history.push(`${ROUTE.EDITOR}/${id}`)
  }

  return (
    <div className={classes.container}>
      {tasks.map((task) =>
        <TaskCard key={`task_${task.get('id')}`} task={task} onClick={openDetails} />
      )}
    </div>
  )
}

export default Overveiw;