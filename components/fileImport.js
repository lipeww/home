'use strict'

import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ArchiveIcon from '@material-ui/icons/Archive';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const fileImport = ({onChange}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <label htmlFor="upload-xlsx">
        <input
          style={{ display: "none" }}
          id="upload-xlsx"
          name="upload-xlsx"
          type="file"          
          onChange={onChange}
          accept=".xls, .xlsx"
        />       
        <Fab color="primary" aria-label="add" component="span">
          <ArchiveIcon />       
        </Fab>
      </label>
    </div>    
  )    
}

export default fileImport;
