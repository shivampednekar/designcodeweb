import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { useInterval } from "react-use"

function TextAnimation() {
  const reactArray = "React".split("")
  const swiftArray = "Swift".split("")

  const [items, setItems] = useState(reactArray)
  const [count, setCount] = useState(0)
  const [play, setPlay] = useState(false)

  useInterval(
    () => {
      // Animation React
      setItems(reactArray)
      setCount(count + 1)

      // Animate Swift, Looping
      if (count === 1) {
        setCount(0)
        setItems(swiftArray)
      }
    },

    play ? 6000 : null
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      // Animate Swift, after timeout
      setItems(swiftArray)
      setPlay(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Container>
      {items.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </Container>
  )
}

export default TextAnimation

const animation = keyframes`
  50% {opacity: 1; transform: scale(1) translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px);}
  60% {opacity: 0; transform: scale(2) translateY(100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px);}
  70% {opacity: 0; transform: scale(2) translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px);}
  80% {opacity: 1; transform: scale(1) translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px);}
`

const Container = styled.div`
  display: inline-block;
  flex-direction: row;
  font-weight: bold;

  & span {
    animation-name: ${animation};
    animation-duration: 6s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;

    & :nth-child(1) {
      animation-delay: 0.1s;
    }

    & :nth-child(2) {
      animation-delay: 0.2s;
    }

    & :nth-child(3) {
      animation-delay: 0.3s;
    }

    & :nth-child(4) {
      animation-delay: 0.4s;
    }

    & :nth-child(5) {
      animation-delay: 0.5s;
    }
  }
`
