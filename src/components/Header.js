import React, { useState } from 'react'
import styled from 'styled-components'
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faBars
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState();
  const cars = useSelector(selectCars);

  return (
    <Container>
        <a href="/">
            <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
            {cars && cars.map((car, index) => (
                <a key={index} href="/">{car}</a>
            ))}
        </Menu>
        <RightMenu>
            <a href="/">Shop</a>
            <a href="/">Account</a>
            <FontAwesomeIcon 
                icon={faBars} 
                style={{cursor: 'pointer'}} 
                onClick={() => setBurgerStatus(true)} 
            />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <FontAwesomeIcon 
                    icon={faClose} 
                    style={{cursor: 'pointer'}} 
                    onClick={() => setBurgerStatus(false)}
                />
            </CloseWrapper>
            {cars && cars.map((car, index) => (
                <li key={index}><a href="/">{car}</a></li>
            ))}
            <li><a href="/">Existing Inventory</a></li>
            <li><a href="/">Used Inventory</a></li>
            <li><a href="/">Trade-in</a></li>
            <li><a href="/">Cypertruck</a></li>
            <li><a href="/">Roadaste</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 12;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1; /* let all flexable items be the same size*/
    justify-content: center;

    a {
        font-weight: 600; 
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white; 
    width: 300px;
    z-index: 11;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;

        }
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`