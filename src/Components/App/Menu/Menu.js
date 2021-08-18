import { NavLink } from 'react-router-dom';

import { 
    ColumnsGap as HomeIcon, 
    ClockHistory as HistoryIcon, 
    HeartFill as LikedIcon,
    BookmarkFill as SavedIcon
} from 'react-bootstrap-icons';

import { MenuContainer, Nav } from './Menu.styled';

const menu = 
[
    { what: "Home", icon: <HomeIcon/>, route: "home" },
    { what: "History", icon: <HistoryIcon/>, route: "history" },
    { what: "Liked", icon: <LikedIcon/>, route: "liked" },
    { what: "Saved", icon: <SavedIcon/>, route: "saved" },
];

const Menu = () => {
    return (
        <MenuContainer>
            <h2>Menu</h2>
            <Nav as="ul">
                {menu.map((item, idx) => {
                    return (
                        <li>
                            <NavLink key={idx} to={`/${item.route}`}>
                                {item.icon}{item.what}
                            </NavLink>
                        </li>
                    );
                })}
            </Nav>
        </MenuContainer>
    )
};

export default Menu