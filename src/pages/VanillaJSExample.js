import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import Layout from '../components/Layout'

export default ()=> {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [residencia, setResidencia] = useState("")
  const [terms, setTerms] = useState(false)
  const [genero, setGenero] = useState("")
  const [isDirty, setIsDirty] = useState(false)

  const [errorFirstname, setErrorFirstname] = useState(false)
  const [errorLastname, setErrorLastname] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorValidEmail, setErrorValidEmail] = useState(false)
  const [errorUsername, setErrorUsername] = useState(false)

  const handleFirstname = event => {
    setFirstname(event.target.value)
    setIsDirty(true)
    setErrorFirstname(false)
  }
  const handleLastname = event => {
    setLastname(event.target.value)
    setIsDirty(true)
    setErrorLastname(false)
  }
  const handleEmail = event => {
    setEmail(event.target.value)
    setIsDirty(true)
    setErrorEmail(false)
    setErrorValidEmail(false)
  }
  const handleUsername = event => {
    setUsername(event.target.value)
    setIsDirty(true)
    setErrorUsername(false)
  }
  const handleResidencia = event => {
    setResidencia(event.target.value)
    setIsDirty(true)
  }
  const handleGenero = event => {
    setGenero(event.target.value)
    setIsDirty(true)
  }
  const handleTerms = event => {
    setTerms(!terms)
    setIsDirty(true)
  }
  const submit = (event ) => {
    if (!firstname) {
      setErrorFirstname(true)
      event.preventDefault() 
    } 
    if (!lastname) {
      setErrorLastname(true)
      event.preventDefault() 
    } 
    if (!email) {
      setErrorEmail(true)
      event.preventDefault() 
    } 
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      setErrorValidEmail(true)
      event.preventDefault()
    }
    if (!username) {
      setErrorUsername(true)
      event.preventDefault() 
    } else {
      event.preventDefault() 
      console.log({ firstname, lastname, email, username, genero, residencia, terms})
      setIsDirty(false)
    }
    
  }
  return (
    
    <Layout title="Vanilla JS example">
      <form onSubmit={submit}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={firstname}
            id="firstname"
            name="firstname"
            label="Nombre"
            fullWidth
            error={isDirty && errorFirstname}
            helperText={(isDirty && errorFirstname && <span>Ingrese Nombre</span>)}
            onChange={handleFirstname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={lastname}
            id="lastname"
            name="lastname"
            label="Apellido"
            fullWidth
            onChange={handleLastname}
            error={isDirty && errorLastname}
            helperText={(isDirty && errorLastname && <span>Ingrese Apellido</span>)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={email}
            id="email"
            name="email"
            label="Email"
            fullWidth
            onChange={handleEmail}
            error={isDirty && (errorEmail || errorValidEmail)}
            helperText={(isDirty && errorEmail) ? <span>Ingrese Email</span> :(isDirty && errorValidEmail) ?  <span>Ingrese una casilla de correo válida</span> :  null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={username}
            id="username"
            name="username"
            label="Usuario"
            fullWidth
            onChange={handleUsername}
            error={isDirty && errorUsername}
            helperText={(isDirty && errorUsername && <span>Ingrese Nombre de Usuario</span>)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl>
          <RadioGroup value={genero} onChange={handleGenero}>
            <FormControlLabel value="female" control={<Radio />} label="Femenino" />
            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
          </RadioGroup>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl>
          <InputLabel htmlFor="residencia">Residencia</InputLabel>
          <Select native value={residencia} onChange={handleResidencia}>
            <option value={''}/>
            <option value={'1'}>Primer Mundo</option>
            <option value={'2'}>Tercer Mundo</option>
            <option value={'3'}>Argentina</option>
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControlLabel
        value={terms}
        onChange={handleTerms}
          control={
            <Checkbox/>
          }
          label="Acepto términos y condiciones"
        />
      </Grid>
            <Button color="primary" type="submit" disabled={!isDirty}>
            Registrarme
          </Button>
      </Grid>
      </form>
    </Layout>
    )
}