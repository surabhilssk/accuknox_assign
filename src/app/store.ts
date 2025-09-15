import { configureStore } from '@reduxjs/toolkit';
import { widgetReducer } from '../features/widgets/widgetsSlice';

export const store = configureStore({
  reducer: {
    widgets: widgetReducer,
  },
});
