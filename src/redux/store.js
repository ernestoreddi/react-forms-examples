import { createStore, combineReducers, applyMiddleware  } from "redux"
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension'

function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}
const middleware = applyMiddleware(logger)
const rootReducer = combineReducers({
  form: formReducer
})
const initialState = {}

const store = createStore(rootReducer, initialState, composeWithDevTools(middleware))

export default store
