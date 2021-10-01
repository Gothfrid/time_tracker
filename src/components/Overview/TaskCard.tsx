"use strict";

import React from 'react';

import { Button, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

import { IUserTaskIm, taskToIm, VOID_TASK } from '../../storage/tasks/taskUtils';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contianer: {
      flex: 1,
      width: 'calc(100% - 96px)',
      padding: '24px',
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-around",
      borderRadius: 12,
      boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%)',
      marginBottom: '24px',
      "&:hover": {
        cursor: "pointer",
        boxShadow: '0 4px 8px 0 rgb(0 0 0 / 30%)',

      }
    },
    button: {
      // width: '100%',
      // height: '100%',
      padding: "24px",
      display: 'flex',
      flexDirection: 'column',
    },
    time: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "24px"
    },
    name: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "24px"
    },
    note: {

    },
    notesHeader: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "24px"
    },

    title: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }),
);

const TaskCard = ({
  task = taskToIm(VOID_TASK),
  onClick,
}: {
  task: IUserTaskIm<string, any>,
  onClick: (task_id: number) => void
}) => {

  const classes = useStyles()
  const name = task.get("user_name");
  const hours = task.get("hours");
  const minutes = task.get("minutes");
  const note = task.get("note");
  const id = task.get("id");

  const openDetails = () => {
    onClick(id);
  }

  return (
    <div className={classes.contianer} onClick={openDetails}>
      <div className={classes.title}>
        <div className={classes.name}>{`${name}`}</div>
        <div className={classes.time}>{`Total: ${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}`}</div>
      </div>
      <div className={classes.notesHeader}>Notes:</div>
      <div className={classes.note}>{note}</div>

    </div>
  )
}

export default TaskCard;