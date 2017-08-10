import { FETCHED_STUDENTS } from '../actions/fetch'
import { EVALUATION_CREATED } from '../actions/evaluate'

export default (state = [], {type, payload} = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return [...payload] // doublecheck this

    case EVALUATION_CREATED :
      return [ ...payload ]

    default :
      return state
  }
}
