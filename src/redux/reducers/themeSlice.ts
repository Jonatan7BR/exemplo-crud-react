import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ThemeState {
	darkModeOn: boolean;
}

const initialState: ThemeState = {
	darkModeOn: false
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		changeTheme: (state, action: PayloadAction<boolean>) => {
			state.darkModeOn = action.payload;
		}
	}
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
