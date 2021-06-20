import React, { useState } from "react"
import styled from "styled-components"

import { tooltipsData } from "../../../data/menuData"
import MenuButton from "../Buttons/menuButton"

const MenuTooltip = props => {
  const { isOpen } = props

  return (
    <Container isOpen={isOpen}>
      {tooltipsData.map((item, index) => (
        <MenuButton item={item} key={index} />
      ))}
    </Container>
  )
}

export default MenuTooltip

const Container = styled.div`
  background: rgba(15, 14, 71, 0.3);
  position: absolute;
  top: 60px;
  right: 30px;
  z-index: 1;
  /* display: ${props => (props.isOpen ? "block" : "none")}; */
  display: grid;
  grid-template-columns: 150px;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  opacity: ${props => (props.isOpen ? 1 : 0.5)};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  backdrop-filter: blur(
    40px
  ); /* Note: backdrop-filter has minimal browser support */
  transform: ${props =>
    props.isOpen
      ? "skewY(0deg) rotate(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  transition: 0.3s ease-in-out;
`
