import React from 'react'
import {connect} from 'react-redux'
import {Grid, PageHeader, Table, Button, Alert, Panel} from 'react-bootstrap'
import GameSearch from '../game-search/game-search'

import {fetchGames} from '../../state/games'

export default connect(
  state => ({
    games: state.games,
    searchString: state.games.searchString
  }),
  dispatch => ({
    fetchGamesHelper: () => dispatch(fetchGames())
  })
)(
  class GamesListView extends React.Component {
    render() {
      const {games, searchString} = this.props

      const searchResults = (
        games.data ?
          games.data.filter(
            game => (game.name.toLowerCase()).includes(searchString.toLowerCase())
          ).map(
            game => (
              <tr key={game.id}>
                <td>{game.id}</td>
                <td>{game.image}</td>
                <td>{game.name}</td>
                <td>{game.players}</td>
              </tr>
            )
          ) :
          (
            <tr>
              <td colSpan="4">Oczekiwanie na dane gier...</td>
            </tr>
          )
      )

      return (
        <Grid>
          <PageHeader>Lista gier<br/>
            <small>Poniżej znajdziesz listę dostępnych planszówek</small>
          </PageHeader>

          <Panel>
            <Button>Dodaj do posiadanych gier</Button>
            <Button>Dodaj do wyszukiwanych gier</Button>
          </Panel>

          <Panel>
            <GameSearch/>
          </Panel>
          {
            searchResults.length !== 0 ? (

                <Table striped>
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Miniatura</th>
                    <th>Nazwa gry</th>
                    <th>Liczba graczy</th>
                  </tr>
                  </thead>
                  <tbody>
                  {searchResults}
                  </tbody>
                </Table>
              ) :
              (
                <Alert bsStyle="warning">
                  Nie znaleziono gier spełniających kryteria wyszukiwania. Spróbuj wyszukać inny tytuł...
                </Alert>
              )
          }
        </Grid>
      )
    }
  }
)