import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from "@material-ui/core/Paper"
import { makeStyles } from '@material-ui/core/styles'

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

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <Grid item xs={12} sm={6}>
  <TextField
    fullWidth
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
  </Grid>
)

const renderCheckbox = ({ input, label,
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

const radioButton = ({ input, children, ...rest }) => (
  <Grid item xs={12} sm={6}>
  <FormControl>
    <RadioGroup {...input} {...rest}>
      {children}
    </RadioGroup>
  </FormControl>
  </Grid>
)

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <Grid item xs={12} sm={6}>
  <FormControl error={touched && error}>
    <InputLabel htmlFor="residencia">{label}</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: 'residencia',
        id: 'residencia'
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
  </Grid>
)
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
    <Grid container spacing={3}>
          <Field name="firstname" component={renderTextField} label="Nombre"/>
          <Field name="lastname" component={renderTextField} label="Apellido" />
          <Field name="email" component={renderTextField} label="Email"/>
          <Field name="username" component={renderTextField} label="Usuario"/>
          <Field name="genero" component={radioButton}>
            <FormControlLabel value="female" control={<Radio />} label="Femenino" />
            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
          </Field>
          <Field name="residencia" component={renderSelectField} label="Residencia">
            <option value={''}/>
            <option value={'1'}>Primer Mundo</option>
            <option value={'2'}>Tercer Mundo</option>
            <option value={'3'}>Argentina</option>
          </Field>
          <Field name="terms" component={renderCheckbox} label="Acepto términos y condiciones"/>

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
