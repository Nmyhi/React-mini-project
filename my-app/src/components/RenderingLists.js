import React from 'react'
import Book from './book'

function RenderingLists() {
    const bookList = [
        'To Kill a Mockingbird',
        'The great gatsby',
        'The catcher in the rye'
    ]

    const books = [
        {
            title: 'To kill a mockingbird',
            author: 'Harper Lee',
            pages: 281
        },
        {
            title: 'The great gatsby',
            author: 'F. Scott Fitzgerald',
            pages: 218
        },
        {
            title: 'To kill a mockingbird',
            author: 'J. D. Salinger',
            pages: 234
        }
    ]

  return (
    <div>
        {bookList.map(book => {
            return <h2>{book}</h2>
        })}
        <hr/>
        {
            books.map(book => {
                return (
                <div>
                    <h5>{book.title}</h5>
                    <p>{book.author}</p>
                    <p>{book.pages}</p>
                </div>
                )
            })
        }
        <hr/>
        {
            books.map(book => {
                return <Book book={book}/>
            })
        }
    </div>
  )
}

export default RenderingLists