import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LoaderState {
	loading: boolean;
}

const initialState: LoaderState = {
	loading: false
};

const loaderSlice = createSlice({
	name: 'loader',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>): void => {
			state.loading = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addMatcher(
				(action: AnyAction) => action.type.includes('/pending'),
				state => {
					state.loading = true;
				}
			)

			.addMatcher(
				(action: AnyAction) => action.type.includes('/fulfilled'),
				state => {
					state.loading = false;
				}
			)

			.addMatcher(
				(action: AnyAction) => action.type.includes('/rejected'),
				state => {
					state.loading = false;
				}
			);
	}
});

export const { setLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
