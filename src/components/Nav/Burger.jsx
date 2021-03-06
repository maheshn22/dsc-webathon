import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  cursor:pointer;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {

    &:nth-child(1) {
      background:#FE4F5A;
      width:64px;
      height:6px;
    }
    
    &:nth-child(2) {
      background:#00A452;
      width:54px;
      height:6px;
    }

    &:nth-child(3) {
      background:#008DFF;
      width:42px;
      height:6px;
    }

    &:nth-child(4) {
      background:#FFBD00;
      width:32px;
      height:6px;
    }
  }
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  cursor:pointer;
  font-size:20px;
  text-transform:uppercase;
  li {
    padding: 18px 10px;
  }

  li:hover{
    font-size: 26px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index:2;

  }
`;

const CloseButton = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.5s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  const backgroundColor = useState(document.body.style)
  const styles = {
    container: {
      height: "auto",
      width: 'auto',
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'end',
      cursor: 'pointer',
      padding: '4px',
    },
    line: {
      // background: "black",
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transformOrigin: 'top left',
      marginBottom: '5px',
    },
    lineMiddle: {
      // opacity: open ? 0: 1,
      // transform: open ? 'translateX(-16px)':'none',
    },
    lineBottom: {
      // transform: open ? 'translateX(-1px) rotate(-45deg)':'none',
      transformOrigin: 'top left',
      marginTop: '5px',
    },       
  }
  const triggerClick = () =>{
    document.body.style = open ? 
    'background: white;'
    : 'background: grey;';
    setOpen(!open)
  }
  return (
    <>
      <StyledBurger style = {{zIndex:"1"}} open={open} onClick={() => triggerClick()}>
          <div style={{...styles.line,...styles.lineTop}}/>
          <div style={{...styles.line,...styles.lineMiddle}}/>
          <div style={{...styles.line,...styles.lineBottom}}/>
          <div style={{...styles.line,...styles.lineBottom}}/>
      </StyledBurger>
      <div>
      {
        open ?
      <CloseButton open={open} onClick={() => triggerClick()}>
        <div />
        <div />
        <div />
      </CloseButton>
      : <></>
      }

    <Ul open={open} className="nav">
    <li class="nav-item">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
        >Home</Link>
    </li>
    <li class="nav-item">
      <Link
        activeClass="active"
        to="aboutus"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
      >About Us</Link></li>
      <li class="nav-item">
      <Link
        activeClass="active"
        to="speakers"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
      >Speakers</Link></li>
      <li class="nav-item">
      <Link
        activeClass="active"
        to="sponsors"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
      >Sponsors</Link></li>
      <li class="nav-item">
      <Link
        activeClass="active"
        to="timeline"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
      >Timeline</Link></li>
      <li class="nav-item">
      <Link
        activeClass="active"
        to="faq"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}        
      >FAQ</Link></li>
      <li class="nav-item">
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
      >Contact Us</Link></li>
    </Ul>
    </div>
    </>
  )
}

export default Burger
