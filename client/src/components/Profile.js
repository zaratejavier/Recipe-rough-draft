import React from "react"
import { AuthCosumer } from "../providers/AuthProvider"
import { Container, Divider } from "semantic-ui-react"

class profile extends React.Component {

  render() {
    return (
      <Container>
        <Divider />
        <h1>Profile</h1>
      </Container>
    )
  }
}

export default profile