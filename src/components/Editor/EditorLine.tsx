"use strict";

import React from 'react';

import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 42,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    }
  }),
);


const EditorLine = ({ children }) => {
  const classes = useStyles()
  return (<div className={classes.container}> {children}</div>)
}


export default EditorLine