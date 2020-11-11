import {
  SET_LOADING,
  RESET_COURSES_STATE,
  SET_COURSES,
  SET_COURSES_FILTER,
  RESET_COURSES_FILTER_STATE,
  CourseProps,
  CoursesFilterProps
} from './types'

export const setLoadingCoursesAction = (payload: boolean) => ({ type: SET_LOADING, payload })
export const resetCoursesAction = () => ({ type: RESET_COURSES_STATE })
export const setCoursesAction = (payload: CourseProps[]) => ({ type: SET_COURSES, payload })
export const setCoursesFilterAction = (payload: CoursesFilterProps) => ({ type: SET_COURSES_FILTER, payload })
export const resetCoursesFilterAction = () => ({ type: RESET_COURSES_FILTER_STATE })
