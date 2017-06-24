//all reducers get two arguments, current state and action, reducers are always call when there is an action.
//State argument is not application state, only the state this reducer
//is responsible for
import { VIDEO_SELECTED, FETCH_VIDEO } from '../actions/index';

export default function(state = {
  videos: [],
  selectedVideo: null
}, action) {
  switch(action.type) {
    case VIDEO_SELECTED:
      return {
        ...state,
        selectedVideo: action.payload
      };
    case FETCH_VIDEO:
      return {
        ...state,
        videos: action.payload,
        selectedVideo: action.payload[0]
      };
  }
  return state
}

// note: in the case the app boots-up and no book is selected, we need to set the state to some value,
// the state cannot be undefined, so we make it = to null in the function argument
