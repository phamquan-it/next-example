// store/itemsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import axios from 'axios';

interface Item {
  id: string;
  name: string;
}

interface ItemsState {
  items: Item[];
}

const initialState: ItemsState = {
  items: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
    addItem(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
    },
    updateItem(state, action: PayloadAction<Item>) {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setItems, addItem, updateItem, deleteItem } = itemsSlice.actions;

export const fetchItems = (): AppThunk => async (dispatch) => {
  const response = await axios.get<Item[]>('/api/items');
  dispatch(setItems(response.data));
};

export const selectItems = (state: RootState) => state.items.items;

export default itemsSlice.reducer;
