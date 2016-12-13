import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'
        >
          {book.title}
        </li>
      )
    })
  }
  render () {
    return (
      <ul className='list-group col-md-4'>
        {this.renderList()}
      </ul>
    )
  }
}

// Liga o state do redux ao component
function mapStateToProps (state) {
  // O retorno dessa função será inserido no props de
  // BookList
  return {
    books: state.books
  }
}

// Liga a action importada ao component
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote BookList de component para container component
// acesso ao state do redux com mapStateToProps
// e as actions determinadas em mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
