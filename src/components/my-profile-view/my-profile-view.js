import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Grid, Row, Col, Panel, PageHeader, Image, Alert} from 'react-bootstrap'
import {Tabs, Tab} from 'react-bootstrap-tabs'

export default connect(
  state => ({
    user: state.user
  })
)(
  class MyProfileView extends React.Component {
    render() {
      const {
        user
      } = this.props

      const currentUser =
        user.data ? user.data : null

      if (currentUser === null) {
        return (
          <Grid>
            <PageHeader>
              Mój profil<br/>
            </PageHeader>
            <Alert bsStyle="warning">
              Oczekiwanie na dane użytkownika...
            </Alert>
          </Grid>
        )
      }

      return (
        <Grid>
          <PageHeader>Mój profil<br/>
          </PageHeader>
          <Row>
            <Col xs={12} md={4} sm={6}>
              <div key={currentUser.id}>
                {
                  currentUser.picture ? (
                <Image
                  src={process.env.PUBLIC_URL + currentUser.picture}
                  alt={"Awatar użytkownika " + currentUser.usernamen}
                  responsive
                />
                  ) : (
                    <Image
                      src={process.env.PUBLIC_URL + '/img/board-games-with-roles-blue.png'}
                      alt={"Awatar użytkownika " + currentUser.username}
                      responsive
                    />
                  )
                }
              </div>
            </Col>

            <Col xs={12} sm={6} md={8}>
              <div key={currentUser.id}>
                <h3>{currentUser.username}</h3>
                <p>About</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              <Panel>
                <Tabs id="noanim-tab-example">
                  <Tab headerClass='pointer' label="Posiadam">
                    <h3>Posiadam</h3>
                    <ul>
                      <li>Dummy</li>
                    </ul>
                  </Tab>
                  <Tab headerClass='pointer' label="Szukam">
                    <h3>Szukam</h3>
                    <ul>
                      <li>Foo</li>
                    </ul>
                  </Tab>
                </Tabs>
              </Panel>
            </Col>
          </Row>
        </Grid>
      )
    }
  }
)