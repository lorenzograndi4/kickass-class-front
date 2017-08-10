import { FETCHED_STUDENTS } from '../actions/fetch'
import { EVALUATION_CREATED } from '../actions/evaluate'
import { EVALUATION_AND_NEXT } from '../actions/evaluate-and-next'

export default (state = [], {type, payload} = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return [...payload] // doublecheck this

    case EVALUATION_CREATED :
      return [ ...payload ]

    case EVALUATION_AND_NEXT :
      return [ ...payload ]

    default :
      return state
  }
}
