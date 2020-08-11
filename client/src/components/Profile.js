import React from "react"
import { AuthConsumer } from "../providers/AuthProvider"
import { Container, Divider } from "semantic-ui-react"

class Profile extends React.Component {
  state = {editing: false, formValues: {name: "", email:""}}

  componentDidMount() {
    const { auth: { user: { name, email } } } = this.props
    this.setState({formValues: {name, email}})
  }

  render() {
    const { formValues: { name, email } } = this.state;
    return (
      <Container>
        <Divider />
        <h1>Profile</h1>
        <h1>name: {name}</h1>
        <h1>email: {email}</h1>


      </Container>
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>{(auth) => <Profile {...props} auth={auth}/>}</AuthConsumer>
)

export default ConnectedProfile