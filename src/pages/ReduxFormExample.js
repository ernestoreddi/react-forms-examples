import React from 'react'
import { Field, reduxForm } from 'redux-form'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from "@material-ui/core/Paper"
import { makeStyles } from '@material-ui/core/styles'

import RadioButton from '../components/ReduxForm/RadioButton'
import RenderTextField from '../components/ReduxForm/RenderTextField'
import RenderCheckbox from '../components/ReduxForm/RenderCheckBox'
import RenderSelectField from '../components/ReduxForm/RenderSelectField'

const validate = values => {
  const errors = {}
  const requiredFields = [
    'firstname',
    'lastname',
    'email',
    'username'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Requerido'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Ingrese una casilla de correo válida'
  }
  return errors
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 7),
  }
}))

const ReduxFormExample = props => {
  const { handleSubmit, pristine, submitting } = props
  const classes = useStyles()
  const submitir = (values)=>console.log(values)
  return (
    <Paper elevation={1} className={classes.paper}>
    <form onSubmit={handleSubmit(submitir)}>
      <Typography variant="h4" gutterBottom>
      Redux-form example
      </Typography>
    <Grid container spacing={7}>
          <Field name="firstname" component={RenderTextField} label="Nombre"/>
          <Field name="lastname" component={RenderTextField} label="Apellido" />
          <Field name="email" component={RenderTextField} label="Email"/>
          <Field name="username" component={RenderTextField} label="Usuario"/>
          <Field name="genero" component={RadioButton}>
            <FormControlLabel value="female" control={<Radio />} label="Femenino" />
            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
          </Field>
          <Field name="residencia" component={RenderSelectField} label="Residencia">
            <option value={''}/>
            <option value={'1'}>Primer Mundo</option>
            <option value={'2'}>Tercer Mundo</option>
            <option value={'3'}>Argentina</option>
          </Field>
          <Field name="terms" component={RenderCheckbox} label="Acepto términos y condiciones"/>
          <Button color="primary" type="submit" disabled={pristine || submitting}>
            Registrarme
          </Button>
    </Grid>
    </form>
    </Paper>
  )
}

export default reduxForm({
  form: 'ReduxFormExample', // a unique identifier for this form
  validate
})(ReduxFormExample)
