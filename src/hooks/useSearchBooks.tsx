import { useEffect, useState } from "react";
import { booksState } from "../state/atoms/Books";
import { useRecoilState } from "recoil";
import booksData from '../static/books.json'
import { IBook } from "../interfaces/IBook";

const {books: booksList} =  booksData

function searchBooks(keyword: string, books: IBook[]): IBook[] {
  keyword = keyword.toLowerCase().trim();

  const results = books.filter((book: IBook) => {
    const { title, subtitle, description } = book;
    const lowerCaseTitle = title.toLowerCase();
    const lowerCaseSubtitle = subtitle.toLowerCase();
    const lowerCaseDescription = description.toLowerCase();

    return (
      lowerCaseTitle.includes(keyword) ||
      lowerCaseSubtitle.includes(keyword) ||
      lowerCaseDescription.includes(keyword)
    );
  });

  return results;
}

export const useSearchBooks = (query: string) => {
  const [books, setBooks] = useRecoilState(booksState);
  
  useEffect(() => {
      loadBooks()
  }, [query])

  const loadBooks = async () => {
    // Here we will load the data from the API
    setBooks(searchBooks(query, booksList))
  };


  return { books };
};
