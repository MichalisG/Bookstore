import { atom } from 'recoil';
import { IBook } from '../../interfaces/IBook';

export const booksState = atom({
  key: 'books',
  default: [] as IBook[],
});
