import { NavLink } from 'react-router-dom';

import { 
    ColumnsGap as HomeIcon, 
    ClockHistory as HistoryIcon, 
    HeartFill as LikedIcon,
    Search as SavedIcon,
} from 'react-bootstrap-icons';

import { MenuContainer, MenuLogo, MenuNav, Nav, Img } from './Menu.styled';

import Logo from 'assets/img/logo.svg';

const menu = 
[
    { what: "Home", icon: <HomeIcon/>, route: "home" },
    { what: "History", icon: <HistoryIcon/>, route: "history" },
    { what: "Liked videos", icon: <LikedIcon/>, route: "liked" },
    { what: "Searches", icon: <SavedIcon/>, route: "searches" },
];

/*
 * Menu() : Component = shows App menu & manages routes
 */
const Menu = () => {
    return (
        <MenuContainer>
            <MenuLogo>
                <Img src={Logo} alt="logo" width="50" fluid/>
                <h1>Reac<span>TUBE</span></h1>
            </MenuLogo>
            <MenuNav>
                <h2>Menu</h2>
                <Nav as="ul">
                    {menu.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <NavLink to={`/${item.route}`}>
                                    {item.icon}{item.what}
                                </NavLink>
                            </li>
                        );
                    })}
                </Nav>
            </MenuNav>
            
        </MenuContainer>
    )
};

export default Menu