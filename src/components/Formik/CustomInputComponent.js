import React from 'react'
import TextField from "@material-ui/core/TextField"

const CustomInputComponent = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <TextField {...field} {...props}
              fullWidth
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors[field.name] && touched[field.name]}
              helperText={(errors[field.name] && touched[field.name]) && errors[field.name]}/>
  )

  export default CustomInputComponent