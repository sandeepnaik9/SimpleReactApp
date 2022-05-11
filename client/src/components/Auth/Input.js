import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import React from 'react'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({name,handleChange,label, half,autoFocus,handleShowPassword,type}) => {
  return (
    <Grid item xs={12} sm={half?6:12} style={{padding:5}}>
        <TextField
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            />
    </Grid>
  )
}

export default Input