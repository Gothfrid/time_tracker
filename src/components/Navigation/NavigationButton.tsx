"use strict";

import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { ButtonBase } from '@mui/material';


type NavigationButtonProps = {
  onClick: () => void,
  label: string,
  icon: JSX.Element,
  selected: boolean
}

const useStyles = makeStyles((theme) => createStyles({
  container: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'padding 200ms ease-out',
    padding: 12,
  },
  label: {
    color: 'black',
    alignText: 'center',
    transition: 'opacity 200ms ease-out',

  },
  icon: {
    width: 48,
    height: 48,
  }
}))

const NavigationButton = ({ onClick, label, icon, selected }: NavigationButtonProps) => {

  const classes = useStyles();

  return (
    <ButtonBase onClick={onClick} className={classes.container} style={{ paddingTop: selected === true ? 8 : 12 }}>
      <div>{icon}</div>
      <div style={{ opacity: selected === true ? 1 : 0 }}>{label}</div>
    </ButtonBase>
  )
}


export default NavigationButton;