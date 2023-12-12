import type { FC } from 'react';
import {useFormik, getIn} from 'formik';
import * as Yup from 'yup';
import Input from '../components/Input';
import PlusIcon from '../components/Icons/Plus';

interface NewBookFormProps {}

const NewBookForm: FC<NewBookFormProps> = () => {

  const bookSchema = Yup.object().shape({
    title: Yup.string()
      .min(10, 'Title should be at least 10 characters')
      .max(120, 'Title should not exceed 120 characters')
      .matches(/^[\w\s@”#&*!]+$/, 'Invalid characters in title')
      .required('Title is required'),
    description: Yup.string()
      .max(512, 'Description should not exceed 512 characters')
      .matches(/^[A-Z].*/, 'Description should start with an uppercase letter'),
    categories: Yup.array().max(4, 'Maximum of 4 categories allowed'),
    authors: Yup.array().max(3, 'Maximum of 3 authors allowed'),
    publisher: Yup.string()
      .min(5, 'Publisher should be at least 5 characters')
      .max(60, 'Publisher should not exceed 60 characters'),
    published: Yup.string().matches(/^\d{4}$/, 'Enter a valid year'),
    pages: Yup.number()
      .typeError('Enter a valid number')
      .max(9999, 'Number of pages should not exceed 9999'),
    rating: Yup.string()
      .max(20, 'Rating should not exceed 20 characters')
      .matches(/^[A-Z].*/, 'Rating should start with an uppercase letter'),
    ISBN10: Yup.string().matches(/^\d{10}$/, 'Enter a valid ISBN-10'),
    ISBN13: Yup.string().matches(/^\d{13}$/, 'Enter a valid ISBN-13'),
    coverImage: Yup.object().nullable(),
  });

  const schema = Yup.object().shape({
    books: Yup.array().of(bookSchema)
  });

  const formik = useFormik({
    initialValues: {
      books: [{
        title: '',
        description: '',
        categories: [],
        authors: [''],
        publisher: '',
        published: '',
        pages: '',
        rating: '',
        ISBN10: '',
        ISBN13: '',
        coverImage: null,
      }],
    },
    validationSchema: schema,
    onSubmit: values => {
      console.log(values);
    },
  });

  const addBook = () => {
    formik.setValues({
      ...formik.values,
      books: [...formik.values.books, {
        title: '',
        description: '',
        categories: [],
        authors: [''],
        publisher: '',
        published: '',
        pages: '',
        rating: '',
        ISBN10: '',
        ISBN13: '',
        coverImage: null,
      }],
    });
  };

  const removeBook = (index: number) => {
    const books = formik.values.books.filter((_, i) => i !== index);
    formik.setValues({ ...formik.values, books });
  };

  const renderTextInput = (index: number, label: string, name: string) => (
    <Input
      label={label}
      id={`${name}-${index}`}
      name={`books[${index}].${name}`}
      onChange={formik.handleChange}
      value={getIn(formik.values, `books[${index}].${name}`)}
      error={
        getIn(formik.touched, `books[${index}].${name}`) && Boolean(getIn(formik.errors, `books[${index}].${name}`))
      }
      errorMessage={getIn(formik.errors, `books[${index}].${name}`)}
    />
  )

  return (
    <div>
      <form id='newBook' onSubmit={formik.handleSubmit}>
        {
          formik.values.books.map((book, index) => (
            <div key={index}>
              {renderTextInput(index, 'Title', 'title')}
              {renderTextInput(index, 'Description', 'description')}
              {renderTextInput(index, 'Published', 'published')}
              {renderTextInput(index, 'Pages', 'pages')}
              {renderTextInput(index, 'Rating', 'rating')}
              {renderTextInput(index, 'ISBN10', 'ISBN10')}
              {renderTextInput(index, 'ISBN13', 'ISBN13')}
              <div onClick={() => removeBook(index)}>
                Remove book
              </div>
            </div>
          ))
        }
          <button className="btn" onClick={addBook}>
            <PlusIcon />
            Add Another Book
          </button>
        <button type='submit'>Save</button>
      </form>
    </div>
  );
}

export default NewBookForm;
