import { combineReducers } from 'redux';
import VideoReducer from './reducer_videos';

const rootReducer = combineReducers({
  videos: VideoReducer
});

export default rootReducer;
