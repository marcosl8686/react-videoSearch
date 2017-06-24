import { combineReducers } from 'redux';
import Video from './reducer_active_video';

const rootReducer = combineReducers({
  video: Video
});

export default rootReducer;
