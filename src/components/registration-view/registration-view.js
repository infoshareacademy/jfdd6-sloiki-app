import React from 'react'
import {connect} from 'react-redux'
import {fetchRegistration} from '../../state/registration'

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
    register: ({username, password, email}) => dispatch(fetchRegistration(username, password, email))
  })
)(
  class RegistrationView extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        username: '',
        password: '',
        email: ''

      }
    }

    render() {
      return (
        <div>
          <Col xs={4}>
          <h1>Rejestracja</h1>
          <Row>
            <form onSubmit={(event) => {
                event.preventDefault()
                this.props.register(this.state)
              }}>
                <FormGroup>
                  <ControlLabel>
                    <label htmlFor="username">Nazwa użytkownika</label>
                  </ControlLabel>

                  <FormControl
                    id="username"
                    type="text"
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

                  <ControlLabel>
                    <label htmlFor="email">Podaj adres e-mail</label>
                  </ControlLabel>

                  <FormControl
                    id="email"
                    type="email"
                    value={this.state.email}
                    placeholder="Podaj adres e-mail"
                    onChange={(event) => {
                      this.setState({email: event.target.value})
                    }}
                  />

                </FormGroup>

                <Button
                  type="submit"
                  bsStyle="button"
                >
                  Zarejstruj się
                </Button>
              </form>

          </Row>
            </Col>
          </div>
      )
    }
  }
)