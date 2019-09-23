import React from 'react'
import TextField from "@material-ui/core/TextField";
import { Formik, Field, Form } from "formik";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import * as Yup from 'yup'
import { TextField as FormikTextField, RadioGroup as FormikRadioGroup, CheckboxWithLabel as FormikCheckboxWithLabel} from 'formik-material-ui'

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

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
   // handleReset,
  } = props
  return (
   <Form onSubmit={handleSubmit}>
     <Grid container spacing={7}>
     <Grid item xs={12} sm={6}>
          <TextField
            id="firstname"
            name="firstname"
            label="Nombre"
            fullWidth
            error={errors.firstname && touched.firstname}
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.firstname && touched.firstname) && errors.firstname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            id="lastname"
            name="lastname"
            label="Apellido"
            fullWidth
            component={CustomInputComponent}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            id="email"
            name="email"
            label="Email"
            fullWidth
            component={FormikTextField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            id="username"
            name="username"
            label="Usuario"
            fullWidth
            component={FormikTextField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl>
          <Field name="genero" id="genero" label="Género" component={FormikRadioGroup}>
            <FormControlLabel value="female" control={<Radio />} label="Femenino" />
            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
          </Field>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            type="text"
            select
            label="Residencia"
            name="residencia"
            id="residencia"
            component={FormikTextField}
            helperText="Seleccione lugar de Residencia"
            inputProps={{name: 'residencia', id: 'residencia'}}
          >
            <MenuItem value="1">Primer Mundo</MenuItem>
            <MenuItem value="2">Tercer Mundo</MenuItem>
            <MenuItem value="3">Argentina</MenuItem>
          </Field>
        </Grid>
        <Grid item xs={12}>
        <Field
            Label={{ label: 'Acepto términos y condiciones' }}
            name="terms"
            component={FormikCheckboxWithLabel}
          />
      </Grid>
          <Button color="primary" type="submit" disabled={!dirty || isSubmitting}>
            Registrarme
          </Button>
    </Grid>
   </Form>

 );
};
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 7),
  }
}))



const FormikExampleForm = (props)=> {
  const classes = useStyles()
  return (
    <Paper elevation={1} className={classes.paper}>
      <Typography variant="h4" gutterBottom>
        Formik example
      </Typography>  
          <Formik 
          initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            residencia: '',
            genero:'',
            terms: false

          }}
          validationSchema={Yup.object().shape({
            firstname: Yup.string()
              .required('Nombre Requerido'),
            lastname: Yup.string()
              .required('Apellido Requerido'),
            username: Yup.string()
              .required('Nombre de usuario Requerido'),
            email: Yup.string()
              .required('Email Requerido').email('Ingrese una casilla de e-mail válida')
          })}

          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            setSubmitting(false)
          }}
          render={props => <RegisterForm {...props} />}/>
    </Paper>)
}
export default FormikExampleForm
