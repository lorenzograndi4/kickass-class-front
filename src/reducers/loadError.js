import { LOAD_ERROR, CLEAR_LOAD_ERROR } from '../actions/loading'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case LOAD_ERROR :
      return '' + payload

    case CLEAR_LOAD_ERROR :
      return null

    default :
      return state
  }
}
