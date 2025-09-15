import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 101, name: "Widget 1", text: "Sample text 1" },
        { id: 102, name: "Widget 2", text: "Sample text 2" }
      ]
    },
    {
      id: 2,
      name: "CWPP Executive Dashboard",
      widgets: [
        { id: 201, name: "Widget A", text: "Sample text A" },
        { id: 202, name: "Widget B", text: "Sample text B" }
      ]
    }
  ],
};

const widgetsSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) category.widgets.push(widget);
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(w => w.id !== widgetId);
      }
    }
  }
});

export const { addWidget, removeWidget } = widgetsSlice.actions;
export const widgetReducer = widgetsSlice.reducer;
