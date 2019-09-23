import React from 'react'
import RadioGroup from '@material-ui/core/RadioGroup'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'

const RadioButton = ({ input, children, ...rest }) => (
    <Grid item xs={12} sm={6}>
    <FormControl>
      <RadioGroup {...input} {...rest}>
        {children}
      </RadioGroup>
    </FormControl>
    </Grid>
  )

  export default RadioButton