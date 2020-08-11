import React from "react"
import { AuthConsumer } from "../providers/AuthProvider"
import { Container, Divider, Grid, Image, Header } from "semantic-ui-react"

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

class Profile extends React.Component {
  state = {editing: false, formValues: {name: "", email:""}}

  componentDidMount() {
    const { auth: { user: { name, email } } } = this.props
    this.setState({formValues: {name, email}})
  }

  profileView = () => {
    const { auth: { user }, } = this.props
    return (
      <>
        <Grid.Column width={4}>
          <Image src={user.image || defaultImage}/>
        </Grid.Column>  
        <Grid.Column width={8}>
          <Header as='h1'>Name: {user.name}</Header>
          <Header as='h1'>Email: {user.email}</Header>

        </Grid.Column>
      </>
    )
  }

  render() {
    return (
      <Container>
        <Divider />
        {this.profileView()}
      </Container>
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>{(auth) => <Profile {...props} auth={auth}/>}</AuthConsumer>
)

export default ConnectedProfile