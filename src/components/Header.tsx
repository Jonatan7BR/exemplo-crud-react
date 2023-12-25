import ThemeToggle from './ThemeToggle';

import './Header.scss';

const Header = (): JSX.Element => (
	<header className="page-header">
		<h1 className="title _nomargin">Exemplo de App CRUD</h1>
		<div className="themetoggler">
			<ThemeToggle />
		</div>
	</header>
);

export default Header;
