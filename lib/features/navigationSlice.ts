import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NavigationState {
  isMenuOpen: boolean;
  currentPage: string;
}

const initialState: NavigationState = {
  isMenuOpen: false,
  currentPage: 'home',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { toggleMenu, setMenuOpen, setCurrentPage } = navigationSlice.actions;
export default navigationSlice.reducer;
