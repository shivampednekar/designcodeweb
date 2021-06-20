import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { menuData } from "../../data/menuData"
import MenuButton from "../UI/Buttons/menuButton"
import MenuTooltip from "../UI/MenuTooltip/menuTooltip"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
    // console.log(event)
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      console.log("Document is clicked")
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Container>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="Logo" />
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              item={item}
              key={index}
              onClick={event => handleClick(event)}
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
            onClick={event => handleClick(event)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
  width: 100%;
  max-width: 1234px;
  height: 44px;
  position: absolute;
  top: 50px;
  left: 0px;
  right: 0px;
  display: grid;
  grid-template-columns: 44px auto;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  z-index: 3;
  /* padding: 0 50px; */

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 30px;
    padding: 0 20px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

// const MenuItem = styled.div`
//   color: rgba(255, 255, 255, 0.7);
//   font-weight: 500;
//   letter-spacing: 0.5px;
//   display: grid;
//   grid-template-columns: 24px auto;
//   gap: 10px;
//   align-items: center;
//   padding: 10px;
//   border-radius: 10px;
//   transition: 0.5s ease-out;

//   :hover {
//     cursor: pointer;
//     background: rgba(255, 255, 255, 0.1);
//     box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
//       inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
//   }
// `
