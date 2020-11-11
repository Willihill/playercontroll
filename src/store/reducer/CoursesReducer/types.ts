import { Action } from 'redux'

export const SET_LOADING = 'CoursesReducer/SET_LOADING'
export const RESET_COURSES_STATE = 'CoursesReducer/RESET_COURSES_STATE'
export const SET_COURSES = 'CoursesReducer/SET_COURSES'
export const SET_COURSES_FILTER = 'CoursesReducer/SET_COURSES_FILTER'
export const RESET_COURSES_FILTER_STATE = 'CoursesReducer/RESET_COURSES_FILTER_STATE'

export interface CourseProps {
  id: string
  institution: string
}

export interface CoursesFilterProps {
  institutionId: string
}

export interface CoursesState {
  courses: CourseProps[]
  loading: boolean
  filter: CoursesFilterProps
}

export interface ActionType extends Action {
  type: string
  payload: any
}
