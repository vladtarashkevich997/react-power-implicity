import './styles.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="header__slider">
				<h1 className="header__title">The Power of Simplicity</h1>
				<p className="header__text">
					Instead of spending time searching for the right app, our AI will bring the
					right app to you.
				</p>
				<a href="#" className="header__btn">Learn</a>
				<ul className="header__list">
					<li className="header__dot"></li>
					<li className="header__dot"></li>
					<li className="header__dot header__dot--active"></li>
					<li className="header__dot"></li>
					<li className="header__dot"></li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
