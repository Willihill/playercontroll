import {
  TaskProps,
  SummaryTaskFilterProps,
  SET_LOADING,
  RESET_SUMMARY_TASK_STATE,
  SET_SUMMARY,
  SET_SUMMARY_TASK_FILTER,
  RESET_SUMMARY_TASK_FILTER_STATE
} from './types'

export const setLoadingSummaryTaskAction = (payload: boolean) => ({ type: SET_LOADING, payload })
export const resetSummaryTaskAction = () => ({ type: RESET_SUMMARY_TASK_STATE })
export const setSummaryAction = (payload: TaskProps[]) => ({ type: SET_SUMMARY, payload })
export const setSummaryTaskFilterAction = (payload: SummaryTaskFilterProps) => ({ type: SET_SUMMARY_TASK_FILTER, payload })
export const resetSummaryTaskFilterAction = () => ({ type: RESET_SUMMARY_TASK_FILTER_STATE })
