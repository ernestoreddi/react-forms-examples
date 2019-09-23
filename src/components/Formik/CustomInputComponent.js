import React from 'react'
import TextField from "@material-ui/core/TextField"
import Grid from '@material-ui/core/Grid'

const CustomInputComponent = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <Grid item xs={12} sm={6}>
      <TextField {...field} {...props}
              fullWidth
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors[field.name] && touched[field.name]}
              helperText={(errors[field.name] && touched[field.name]) && errors[field.name]}/>
    </Grid>
  )

  export default CustomInputComponent