import { createGlobalStyle } from "styled-components"
import { themes } from "./colorStyles"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${themes.light.backgroundColor};
    overflow: hidden;

    @media (prefers-color-scheme: dark) {
      background: ${themes.dark.backgroundColor};
    }
  }
`
