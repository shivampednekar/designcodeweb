import React from "react"
import styled from "styled-components"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { themes } from "../styles/colorStyles"

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Container>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);

  & h1 {
    color: ${themes.dark.text};
    font-size: 1.9rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  & p {
    color: ${themes.dark.text2};
    font-weight: normal;
  }

  @media (max-width: 450px) {
    & P {
      line-height: 1.9;
      padding-right: 4rem;
    }
  }
`
