import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

function MenuButton(props) {
  const { item } = props

  return (
    <>
      <Link to={item.link} onClick={props.onClick}>
        <MenuItem title={item.title}>
          <img src={item.icon} alt={item.title} />
          <P>{item.title}</P>
        </MenuItem>
      </Link>
    </>
  )
}

export default MenuButton

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${props => (props.title ? "10px" : "0px")};
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s ease-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`

const P = styled.p`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
`
