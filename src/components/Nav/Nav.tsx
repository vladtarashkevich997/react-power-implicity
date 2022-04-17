import './styles.scss';
import logo from '../../assets/app_logo.svg';

const Nav = () => {
	return (
		<div className="nav">
			<a href="#" className="nav__logo">
				<img className="nav__picture" src={logo} alt="logo" />
			</a>
			<ul className="nav__list">
				<li className="nav__item">
					<a className='nav__link' href="#">Features</a>
				</li>
				<li className="nav__item">
					<a className='nav__link' href="#">Partners</a>
				</li>
				<li className="nav__item">
					<a className='nav__link' href="#">Stories</a>
				</li>
			</ul>
			<button className="nav__btn" type='button'>Download for free</button>
		</div>
	);
};

export default Nav;
