import { combineReducers } from 'redux';
import VideoReducer from './reducer_videos';
import ActiveVideo from './reducer_active_video';

const rootReducer = combineReducers({
  videos: VideoReducer,
  activeVideo: ActiveVideo
});

export default rootReducer;
