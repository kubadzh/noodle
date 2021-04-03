import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import { GiNoodles } from 'react-icons/gi'; //https://react-icons.github.io/react-icons/icons?name=gi
// Create a Nav component that'll render 
// a <nav> tag with some styles
export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

// Create a NavLink component that'll render 
// a <Link> tag with some styles
/* I am a new component and I want to be 
like Mr.Link but in a stylish manner, 
so I am going to take all of the Mr.Link 
characteristics and add a little bit a style 
of my own */
export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    //Apply below style when the browser window is <400px
    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`;


export const Bars = styled(GiNoodles)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;
