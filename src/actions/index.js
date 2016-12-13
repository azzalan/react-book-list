export function selectBook (book) {
  // tem que ser um objeto com uma propriedade 'type'
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
