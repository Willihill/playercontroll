import { combineReducers } from 'redux'

import CoursesReducer from './CoursesReducer'
import { CoursesState } from './CoursesReducer/types'
import ServerReducer from './ServerReducer'
import { ServerState } from './ServerReducer/types'
import SummaryTaskReducer from './SummaryTaskReducer'
import { SummaryTaskState } from './SummaryTaskReducer/types'

export interface ApplicationState {
  SummaryTaskReducer: SummaryTaskState
  CoursesReducer: CoursesState
  ServerReducer: ServerState
}

const rootReducer = combineReducers({
  SummaryTaskReducer,
  CoursesReducer,
  ServerReducer
})

export default rootReducer
