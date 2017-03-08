import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Grid, Table} from 'react-bootstrap'

class UsersListView extends React.Component {
  render() {
    const {
      users
    } = this.props

    return (
      <Grid>
        <h1>Lista użytkowników</h1>
        <Table striped>
          <thead>
          <tr>
            <th>ID</th>
            <th>Imię i nazwisko</th>
            <th>Posiadane gry</th>
            <th>Lista życzeń</th>
          </tr>
          </thead>
          <tbody>
          {
            users.data ?
              users.data.map(
                user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      <Link to={'/user-profile/' + user.id}>
                        {user.name} {user.surname}
                      </Link>
                    </td>
                    <td>
                      {
                        (user.gameList).map(
                          game => (
                            <li key={game.id}>{game.name}</li>
                          )
                        )
                      }
                    </td>
                    <td>
                      {
                        (user.wishList).map(
                          game => (
                            <li key={game.id}>{game.name}</li>
                          )
                        )
                      }
                    </td>
                  </tr>
                )
              )
              : <tr><td colSpan="4">Oczekiwanie na dane użytkowników...</td></tr>
          }
          </tbody>
        </Table>
      </Grid>
    )
  }
}

export default connect(
  state => ({
    users: state.users
  }),
  dispatch => ({})
)(UsersListView)