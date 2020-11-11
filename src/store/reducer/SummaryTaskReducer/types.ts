import { Action } from 'redux'

export const SET_LOADING = 'SummaryTaskReducer/SET_LOADING'
export const RESET_SUMMARY_TASK_STATE = 'SummaryTaskReducer/RESET_SUMMARY_TASK_STATE'
export const SET_SUMMARY = 'SummaryTaskReducer/SET_SUMMARY'
export const SET_SUMMARY_TASK_FILTER = 'SummaryTaskReducer/SET_SUMMARY_TASK_FILTER'
export const RESET_SUMMARY_TASK_FILTER_STATE = 'SummaryTaskReducer/RESET_SUMMARY_TASK_FILTER_STATE'

export interface TaskProps {
  id: string
  course: string
  material: string
  teacher: string
  status: string
  date: string
}

export interface SummaryTaskFilterProps {
  statusId: string
}

export interface SummaryTaskState {
  loading: boolean
  summary: TaskProps[]
  filter: SummaryTaskFilterProps
}

export interface ActionType extends Action {
  type: string
  payload: any
}
