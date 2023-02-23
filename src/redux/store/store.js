import rootReducer from "../reducer"
import {createStore} from "redux"

const storeValue = createStore(rootReducer)

export default storeValue
