import React from 'react'
import TextField from "@material-ui/core/TextField"
import { Formik, Field, Form } from "formik";
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import * as Yup from 'yup'
import { TextField as FormikTextField, RadioGroup as FormikRadioGroup, CheckboxWithLabel as FormikCheckboxWithLabel} from 'formik-material-ui'

import Layout from '../components/Layout'
import CustomInputComponent from '../components/Formik/CustomInputComponent'

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    //setFieldValue
  } = props

  return (
   <Form>
     <Grid container spacing={7}>
     <Grid item xs={12} sm={6}>
          <TextField
            name="firstname" label="Nombre" fullWidth helperText={(errors.firstname && touched.firstname) && errors.firstname}
            value={values.firstname} error={errors.firstname && touched.firstname}
            onChange={handleChange} onBlur={handleBlur}/>
        </Grid>
          <Field name="lastname" label="Apellido" fullWidth component={CustomInputComponent}/>
        <Grid item xs={12} sm={6}>
          <Field name="email" label="Email" fullWidth component={FormikTextField}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field name="username" label="Usuario" fullWidth component={FormikTextField}/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl>
          <Field name="genero" label="Género" component={FormikRadioGroup}>
            <FormControlLabel value="female" control={<Radio />} label="Femenino" />
            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
          </Field>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field type="text" select label="Residencia" name="residencia" component={FormikTextField}
            helperText="Seleccione lugar de Residencia"
            inputProps={{name: 'residencia', id: 'residencia'}}>
            <MenuItem value="1">Primer Mundo</MenuItem>
            <MenuItem value="2">Tercer Mundo</MenuItem>
            <MenuItem value="3">Argentina</MenuItem>
          </Field>
        </Grid>
        <Grid item xs={12}>
          <Field Label={{ label: 'Acepto términos y condiciones' }} name="terms" component={FormikCheckboxWithLabel}/>
        </Grid>
          <Button color="primary" type="submit" disabled={!dirty || isSubmitting}>
            Registrarme
          </Button>
    </Grid>
   </Form>

 );
}


function emailTaken(ref, msg) {
	return this.test({
		name: 'emailTaken',
		exclusive: false,
    message: msg || 'El email ya fue registrado',
    
    test: function (value) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(value !== "ernesto.reddi@gmail.com");
        }, 1000);
      });
    }
	})
};

Yup.addMethod(Yup.string, 'emailTaken', emailTaken);


const FormikExampleForm = (props)=> {
  return (
    <Layout title="Formik example"> 
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
                .required('Email Requerido').email('Ingrese una casilla de e-mail válida')//.emailTaken()
            })}

            onSubmit={(values, { setSubmitting }) => {
              console.log(values)
              setSubmitting(false)
            }}>
            {props => <RegisterForm {...props} />}
          </Formik>
    </Layout>)
}
export default FormikExampleForm

/*
            <TextField
              name="email" label="Email" fullWidth helperText={(errors.firstname && touched.email) && errors.email}
              value={values.email} error={errors.email && touched.email}
              onBlur={handleBlur} onChange={(e) => {
                                              const newValue = e.target.value.split("@")[0]
                                              setFieldValue('email', e.target.value)
                                              setFieldValue('username', newValue)
            }}/> 
            
            */
