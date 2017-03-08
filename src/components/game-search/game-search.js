import React from 'react'
import { connect } from 'react-redux'
import { search } from '../../state/games'

const GameSearch = ({ games, searchString, search }) => (
  <div>
    <label htmlFor="search">Wyszukiwarka gier</label>{' '}
    <input
      id="search"
      type="text"
      placeholder="Zacznij wpisywać tytuł..."
      value={searchString}
      onChange={ (event) => search(event.target.value) }
    />
  </div>
)

export default connect(
  state => ({
    games: state.games.gamesData,
    searchString: state.games.searchString
  }),
  dispatch => ({
    search: (value) => dispatch(search(value))
  })
)(GameSearch)