const RANGE = 'game-list/RANGE'
const RESET = 'game-list/RESET'
export const SET_MIN_MAX_LABEL = 'game-list/SET_MIN_MAX_LABEL'

export const reset = (value) => ({
  type: RESET,
  value
})

export const range = (value) => ({
  type: RANGE,
  value
})

const minLabel = 2
const maxLabel = 20

const initialState = {
  minLabel: minLabel,
  maxLabel: maxLabel,
  changeRange: {min: minLabel, max: maxLabel}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET:
      return {
        ...initialState
      }
    case RANGE:
      return {
        ...state,
        changeRange: action.value
      }
    case SET_MIN_MAX_LABEL:
      return {
        ...state,
        minLabel: action.data.map(
          item => item.playersMin
        ).reduce(
          (prev, next) => (
            prev <= next ? prev : next
          )
        ),
        maxLabel: action.data.map(
          item => item.playersMax
        ).reduce(
          (prev, next) => (
            prev >= next ? prev : next
          )
        )
      }
    default:
      return state
  }
}