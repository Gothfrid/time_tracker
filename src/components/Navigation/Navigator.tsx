"use strict";

import React from 'react';

import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { useHistory, useLocation } from "react-router-dom";

import EditIcon from '../common/icons/EditIcon';
import HomeIcon from '../common/icons/HomeIcon';
import NavigationButton from './NavigationButton';

import { ROUTE } from "../../utils/routes_utils";
import { ROUTE_NAME } from '../../utils/text_utils';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: 64,
      width: '100%',
      boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%)',

      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row'

    }
  }),
);

const Navigator = ({ }) => {

  const classes = useStyles()

  const history = useHistory()
  const location = useLocation()

  const goToOverview = () => {
    history.push(ROUTE.DEFAULT)
  }

  const goToEditor = () => {
    history.push(ROUTE.EDITOR)
  }

  return (
    <div className={classes.container}>
      <NavigationButton
        onClick={goToOverview}
        label={ROUTE_NAME.OVERVIEW}
        icon={<HomeIcon fill={location.pathname === ROUTE.DEFAULT ? "red" : "black"} />}
        selected={location.pathname === ROUTE.DEFAULT}
      />
      <NavigationButton
        onClick={goToEditor}
        label={ROUTE_NAME.EDITOR}
        icon={<EditIcon fill={location.pathname === ROUTE.EDITOR ? "red" : "black"} />}
        selected={location.pathname === ROUTE.EDITOR}
      />
    </div>

  )
}

export default Navigator