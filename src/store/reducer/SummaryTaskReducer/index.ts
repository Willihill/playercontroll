import {
  ActionType,
  SummaryTaskState,
  SET_LOADING,
  RESET_SUMMARY_TASK_STATE,
  SET_SUMMARY,
  SET_SUMMARY_TASK_FILTER,
  RESET_SUMMARY_TASK_FILTER_STATE
} from './types'

const initialState: SummaryTaskState = {
  loading: false,
  summary: [],
  filter: {
    statusId: ''
  }
}

export default (state: SummaryTaskState = initialState, { type, payload }: ActionType): SummaryTaskState => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload }
    case SET_SUMMARY:
      return { ...state, summary: payload }
    case SET_SUMMARY_TASK_FILTER:
      return { ...state, filter: { ...state.filter, ...payload } }
    case RESET_SUMMARY_TASK_STATE:
      return initialState
    case RESET_SUMMARY_TASK_FILTER_STATE:
      return {
        ...state,
        filter: {
          statusId: ''
        }
      }
    default:
      return state
  }
}
