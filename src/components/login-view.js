import React from 'react'
import {connect} from 'react-redux'
import {logIn} from '../state/session'
import {
  Col,
  Row,
  Grid,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  HelpBlock
} from 'react-bootstrap'

export default connect(
  null,
  dispatch => ({
    logIn: (username, password) => dispatch(logIn(username, password))
  })
)(
  class LoginView extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        username: '',
        password: ''
      }
    }

    render() {
      return (
          <div>
          <Col xs={4}>
          <Row>

            <form className="login" onSubmit={(event) => {
                event.preventDefault()
                this.props.logIn(this.state.username, this.state.password)
              }}>
              <h1 className="h1login">Zaloguj się</h1>
                <FormGroup>
                  <ControlLabel>
                    <label htmlFor="username">Nazwa użytkownika</label>
                  </ControlLabel>

                  <FormControl
                    id="username"
                    type="text" /* TODO: changed type to proper when established what type should be the login value be*/
                    value={this.state.username}
                    placeholder="Nazwa użytkownika"
                    onChange={(event) => {
                      this.setState({username: event.target.value})
                    }}
                  />

                  <ControlLabel>
                    <label htmlFor="password">Hasło</label>
                  </ControlLabel>

                  <FormControl
                    id="password"
                    type="password"
                    value={this.state.password}
                    placeholder="Hasło"
                    onChange={(event) => {
                      this.setState({password: event.target.value})
                    }}
                  />
                </FormGroup>

                <Button
                  type="submit"
                  bsStyle="button"
                >
                  Zaloguj
                </Button>
              </form>

          </Row>
            </Col>
          </div>
      )
    }
  }
)