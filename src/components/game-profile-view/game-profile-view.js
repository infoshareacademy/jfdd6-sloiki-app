import React from 'react'
import { connect } from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'

import {Grid, PageHeader, Panel, Button} from 'react-bootstrap'

import {fetchGames} from '../../state/games'

export default connect(
  state => ({
    games: state.games
  }),
  dispatch => ({
    fetchGamesHelper: () => dispatch(fetchGames())
  })
)(
  class GameProfileView extends React.Component {
    render() {
      const {
        games,
        params
      } = this.props

      const currentGame =
        games.data ?
          games.data.find(
            game => game.id === parseInt(params.id, 10))
          : <p>Waiting for games data...</p>

      const prevGame = (
        (currentGame.id > 1) ? (currentGame.id - 1) : (currentGame.id)
      )

      const nextGame = (
        (currentGame.id <= games.length - 1) ? (currentGame.id + 1) : (currentGame.id)
      )

      return (
        <Grid>
          <div>
            <PageHeader>Profil gry
              <small>Zapoznaj się ze szczegółami wybranej pozycji</small>
            </PageHeader>
            {
              <div key={currentGame.id}>
                <img src={currentGame.image}
                     alt="Zdjecie gry"/>

                <h2>{currentGame.name}</h2>

                <Panel header="Ilość graczy">{currentGame.players}</Panel>

                <Panel header="Opis">{currentGame.description}</Panel>
              </div>
            }
            <LinkContainer to={'/game-profile/' + prevGame}>
              <Button>
                Poprzednia
              </Button>
            </LinkContainer>

            <LinkContainer to={'/game-profile/' + nextGame}>
              <Button>
                Następna
              </Button>
            </LinkContainer>
          </div>
        </Grid>
      )
    }
  }
)

