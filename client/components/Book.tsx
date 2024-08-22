import { useState } from 'react'
import '../styles/index.css'
import FindBook from './FindBook'
import BookCollection from './BookCollection'
import { BooksData } from '../../models/books' // Adjust this import path as needed

export default function Books() {
  const [collection, setCollection] = useState<BooksData[]>([])

  const addToCollection = (book: BooksData) => {
    setCollection((prev) => [...prev, book])
  }

  const removeFromCollection = (bookId: string | number) => {
    setCollection((prev) => prev.filter((book) => book.id !== bookId))
  }

  return (
    <div className="books-container">
      <div className="books-content">
        <div className="sidebar">
          <BookCollection
            collection={collection}
            onRemoveFromCollection={removeFromCollection}
          />
        </div>
        <div className="main-content">
          <FindBook
            onAddToCollection={addToCollection}
            collectionIds={collection.map((book) => book.id)}
          />
        </div>
      </div>
    </div>
  )
}
