// store/store.ts
import { ThunkAction, configureStore,Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import someSliceReducer from './slices/someSlice';
import itemsReducer from './slices/itemsSlice';

const rootReducer = combineReducers({
  someSlice: someSliceReducer,
  items:  itemsReducer
});

const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;