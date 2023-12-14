import { useEffect, useState } from "react";
import { booksState } from "../state/atoms/Books";
import { useRecoilState } from "recoil";
import booksData from '../static/books.json'
import { IBook } from "../interfaces/IBook";

const {books: booksList} =  booksData

export const useBook = (bookId: string | undefined) => {
  const [books, setBooks] = useRecoilState(booksState);
  const [book, setBook] = useState<IBook | null>(null)
  const [error, setError] = useState<number>(0)
  
  useEffect(() => {
      loadBooks()
  }, [])

  useEffect(() => {
    if(books.length && bookId) {
      const _book = books.find(b => b.isbn === bookId)

      if(!_book) {
        setError(404)
      }
      else {
        setBook(_book as IBook)
      }
    }
}, [books, bookId])

  const loadBooks = async () => {
    // Here we will load the data from the API
    setBooks(booksList)
  };


  return { book, error };
};
