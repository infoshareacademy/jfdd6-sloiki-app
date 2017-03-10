import React from 'react'
import { connect } from 'react-redux'
import { search } from '../../state/search'

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
    games: state.games,
    searchString: state.search.searchString
  }),
  dispatch => ({
    search: (value) => dispatch(search(value))
  })
)(GameSearch)