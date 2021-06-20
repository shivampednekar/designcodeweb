import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Caption2, SmallText } from "../../../styles/textStyles"

function PurchaseButton(props) {
  const { title, subtitle } = props

  return (
    <Link to="/page-2">
      <ButtonWrapper>
        <IconWrapper>
          <Icon src="/images/icons/credit.svg" className="icon" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Get Pro Access"}</Title>
          <SubTitle>{subtitle || "$19 per month"}</SubTitle>
        </TextWrapper>
      </ButtonWrapper>
    </Link>
  )
}

export default PurchaseButton

const ButtonWrapper = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  width: 280px;
  height: 77px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;
  padding: 12px;
  border-radius: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);

    .icon {
      transform: scale(1.1);
    }
  }
`

const TextWrapper = styled.div``

const Title = styled(Caption2)`
  color: #000;
`

const SubTitle = styled(SmallText)`
  color: #000;
  opacity: 0.7;
`

const IconWrapper = styled.div`
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: relative;
  display: grid;
  justify-content: center;
  justify-self: center;
  align-content: center;

  ${ButtonWrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
`
const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  ${ButtonWrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`
