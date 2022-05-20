import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import CounterReducer from '../textApi/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counters: CounterReducer
  },
});
