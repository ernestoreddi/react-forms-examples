import React from 'react'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const RenderCheckbox = ({ input, label,
    meta: { touched, invalid, error } }) => (
<Grid item xs={12}>
<FormControlLabel
control={
<Checkbox
checked={input.value ? true : false}
onChange={input.onChange}
/>
}
label={label}
/>
</Grid>
)

export default RenderCheckbox