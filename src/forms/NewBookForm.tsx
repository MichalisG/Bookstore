import type { FC } from 'react';
import {useFormik, getIn} from 'formik';
import * as Yup from 'yup';
import Input from '../components/Input';
import PlusIcon from '../components/Icons/Plus';
import Multiselect from '../components/Multiselect';
import ImagePicker from '../components/ImagePicker';
import Icons from '../components/Icons';
interface NewBookFormProps {}

const tags = [
  "Tutorial",
  "HowTo",
  "DIY",
  "Review",
  "Tech",
  "Gaming",
  "Travel",
  "Fitness",
  "Cooking",
  "Vlog",
];

const NewBookForm: FC<NewBookFormProps> = () => {

  const bookSchema = Yup.object().shape({
    title: Yup.string()
      .min(10, 'Title should be at least 10 characters')
      .max(120, 'Title should not exceed 120 characters')
      .matches(/^[\w\s@”#&*!]+$/, 'Invalid characters in title')
      .required('Title is required'),
    description: Yup.string()
      .max(512, 'Description should not exceed 512 characters')
      .matches(/^[A-Z].*/, 'Description should start with an uppercase letter')
      .required('Description is required'),
    categories: Yup.array().max(4, 'Maximum of 4 categories allowed'),
    authors: Yup.array()
      .of(
        Yup.string()
          .min(5, 'Author should be at least 5 characters')
          .max(60, 'Author should not exceed 60 characters')
          .required('Author should be at least 5 characters'),
      )
      .min(1, "You can't leave this blank.")
      .required("You can't leave this blank.")
      .max(3, 'Maximum of 3 authors allowed'),
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

  const addAuthorField = (index: number) => {
    const updatedBooks = formik.values.books.map((book, i) =>
      i === index ? { ...book, authors: [...book.authors, ''] } : book
    );
    formik.setValues({ ...formik.values, books: updatedBooks });
  };

  const removeAuthorField = (bookIndex: number, authorIndex: number) => {
    const updatedBooks = formik.values.books.map((book, i) =>
      i === bookIndex ? { ...book, authors: book.authors.filter((_, j) => j !== authorIndex) } : book
    );
    formik.setValues({ ...formik.values, books: updatedBooks });
  };

  const handleImageChange = (index: number) => (file: {}) => {
    console.log("🚀 ~ file: NewBookForm.tsx:127 ~ handleImageChange ~ file:", file)
    if (file) {
      formik.setFieldValue(`books[${index}].coverImage`, file); // Update form value with selected file
    }
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

  const renderAuthorsField = (index: number) => formik.values.books[index].authors.map((author: string, authorIndex: number) => (
    <div key={authorIndex}>
      <div className='flex items-center'>
      <Input
        id={`author-${index}-${authorIndex}`}
        name={`books[${index}].authors[${authorIndex}]`}
        label={`Author ${authorIndex + 1}`}
        value={formik.values.books[index].authors[authorIndex]}
        onChange={formik.handleChange}
        error={
          getIn(formik.touched, `books[${index}].authors[${authorIndex}]`) && Boolean(getIn(formik.errors, `books[${index}].authors[${authorIndex}]`))
        }
        errorMessage={getIn(formik.errors, `books[${index}].authors[${authorIndex}]`)}
      />
      {authorIndex !== 0 && (
        <button
          className='btn btn-outline btn-accent btn-sm m-2'
          onClick={() => removeAuthorField(index, authorIndex)}
        >
          <Icons.Remove/>
        </button>
      )}
      </div>
      {authorIndex === formik.values.books[index].authors.length - 1 &&  formik.values.books[index].authors.length < 3 && (
        <button
          className='btn btn-outline btn-secondary'
          onClick={() => addAuthorField(index)}
        >
          <Icons.Add/>
          Add Another Author
        </button>
      )}
    </div>
  ))

  return (
    <div>
      <form id='newBook' onSubmit={formik.handleSubmit}>
        {
          formik.values.books.map((book, index) => (
            <div className='border p-4 m-4 rounded-lg'>
            <div key={index} className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
              <ImagePicker
                label='Book Cover'
                onChange={handleImageChange(index)}
              />
              {renderTextInput(index, 'Title', 'title')}
              {renderTextInput(index, 'Description', 'description')}
              <Multiselect
                label='Categories (max 3)'
                options={tags}
                maxSelected={3}
                onChange={(categories: string[])=>{
                  formik.setFieldValue(`books[${index}].categories`, categories);
                }}
              />
              {renderAuthorsField(index)}
              </div>
              <div>
              {renderTextInput(index, 'Published', 'published')}
              {renderTextInput(index, 'Pages', 'pages')}
              {renderTextInput(index, 'Rating', 'rating')}
              {renderTextInput(index, 'ISBN10', 'ISBN10')}
              {renderTextInput(index, 'ISBN13', 'ISBN13')}
              </div>
              </div>
              <div className='flex justify-end'>
                <button className='max-w-sm btn btn-accent btn-md' onClick={() => removeBook(index)}>
                  <Icons.Remove/>
                  Remove book
                </button>
              </div>
            </div>
          ))
        }
        <div className='w-full flex justify-end'>
          <button className="btn btn-neutral m-4" onClick={addBook}>
            <PlusIcon />
            Add Another Book
          </button>
        </div>
        <button className="btn btn-primary m-4 w-28" type='submit'>Save</button>
      </form>
    </div>
  );
}

export default NewBookForm;
