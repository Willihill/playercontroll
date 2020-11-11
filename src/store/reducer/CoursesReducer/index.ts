import {
  SET_LOADING,
  RESET_COURSES_STATE,
  SET_COURSES,
  SET_COURSES_FILTER,
  RESET_COURSES_FILTER_STATE,
  CoursesState,
  ActionType
} from './types'

const initialState: CoursesState = {
  loading: false,
  courses: [],
  filter: {
    institutionId: ''
  }
}

export default (state: CoursesState = initialState, { type, payload }: ActionType): CoursesState => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload }
    case SET_COURSES:
      return { ...state, courses: payload }
    case SET_COURSES_FILTER:
      return { ...state, filter: { ...state.filter, ...payload } }
    case RESET_COURSES_STATE:
      return initialState
    case RESET_COURSES_FILTER_STATE:
      return {
        ...state,
        filter: {
          institutionId: ''
        }
      }
    default:
      return state
  }
}
