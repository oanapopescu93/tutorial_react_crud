import { createStore} from 'redux';
import allReducers from '../components/reducers'

const store = createStore(
	allReducers,
	composeWithDevTools(applyMiddleware(thunk))
)

export default store