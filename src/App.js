import React, {Fragment} from 'react'
import { Router} from "@reach/router"

//Pages
import Home from './pages/Home'
import FormikExample from './pages/FormikExample'
import ReduxFormExample from './pages/ReduxFormExample'
import VanillaJSExample from './pages/VanillaJSExample'

//Components
import Header from './components/Header'

function App() {
  return (
    <Fragment>
      <Header/>
      <Router>
            <Home path="/" />
            <FormikExample path="formik" />
            <ReduxFormExample path="reduxforms" />
            <VanillaJSExample path="vanillajs" />
      </Router>
    </Fragment>
  );
}

export default App;
