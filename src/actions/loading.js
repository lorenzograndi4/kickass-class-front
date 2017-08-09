export const LOAD_ERROR = 'LOAD_ERROR'

export const CLEAR_LOAD_ERROR = 'CLEAR_LOAD_ERROR'

export default () => ({
  type: CLEAR_LOAD_ERROR
})

export const showError = (error) => ({
  type: LOAD_ERROR,
  payload: error
})
