import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Copyright extends Component {
  render() {
    return (
      <div>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://filipeluiz.com.br/">
            Filipe Luiz
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>        
      </div>
    )
  }
}

export default Copyright;