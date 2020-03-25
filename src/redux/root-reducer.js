import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import favouriteReducer from './favourites/favourites.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favourites']
};

const rootReducer = combineReducers({
  user: userReducer,
  favourites:favouriteReducer
});

export default persistReducer(persistConfig, rootReducer);
