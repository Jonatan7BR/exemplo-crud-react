import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { changeTheme } from '../redux/reducers/themeSlice';

import './ThemeToggle.scss';

const ThemeToggle = (): JSX.Element => {
	const darkModeOn = useAppSelector(state => state.theme.darkModeOn);
	const dispatch = useAppDispatch();

	const changeThemeEvent = (): void => {
		dispatch(changeTheme(!darkModeOn));
	};

	const buttonTitle = darkModeOn ? 'Mudar para tema claro' : 'Mudar para tema escuro';

	return (
		<button
			type="button"
			className="toggle-theme material-symbols-outlined"
			title={buttonTitle}
			onClick={changeThemeEvent}
		>
			{darkModeOn ? 'dark_mode' : 'light_mode'}
		</button>
	);
};

export default ThemeToggle;
