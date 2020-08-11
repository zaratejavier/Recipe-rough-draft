import React from "react"
import { AuthConsumer } from "../providers/AuthProvider"
import { Container, Divider, Grid, Image, Header, GridRow, GridColumn, Button, Form } from "semantic-ui-react"
import Dropzone from "react-dropzone"

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

class Profile extends React.Component {
  state = {editing: false, formValues: {name: "", email: "", file: ""}}

  componentDidMount() {
    const { auth: { user: { name, email } } } = this.props
    this.setState({formValues: {name, email}})
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      formValues:
      {
        ...this.state.formValues,
        [name]: value
      }
    })
  }

  handleSubmit = (e) => [

  ]
  
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


  editView = () => {
    const { auth: { user }, } = this.props;
    const { formValues: { name, email } } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Grid.Column width={4}>
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                style={styles.dropzone}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            label="Name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <Button>Update</Button>
        </Grid.Column>
      </Form>
    )
  }

  toggleEdit = () => {
    this.setState({editing: !this.state.editing })
  }

  render() {
    const {editing} = this.state
    return (
      <Container>
        <Divider />
        <Grid>
          <Grid.Row>
            {editing ? this.editView() : this.profileView()}
            <GridColumn>
              <Button onClick={this.toggleEdit}>
                {editing ? "Cancel" : "Edit"}
              </Button>
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>{(auth) => <Profile {...props} auth={auth}/>}</AuthConsumer>
)

export default ConnectedProfile