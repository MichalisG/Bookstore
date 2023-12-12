import type { FC } from 'react';
import NewBookForm from '../forms/NewBookForm';
interface AddNewBookProps {}

const AddNewBook: FC<AddNewBookProps> = () => {
  return (<>
    <NewBookForm />
  </>);
}

export default AddNewBook;
