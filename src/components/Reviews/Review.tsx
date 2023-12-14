import type { FC } from 'react';
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'

interface ReviewProps { 
  index: number
}

const avatars = [avatar1, avatar2, avatar3]

const reviews = [
  `This book is a treasure trove for developers aiming to understand the essence of the language. It brilliantly focuses on the 'good parts' while steering clear of the less desirable aspects. Crockford's explanations are crystal clear, making complex concepts easily digestible for beginners and offering valuable insights even for seasoned developers. A must-read for anyone wanting to write elegant and efficient JavaScript code.`,
  `This coding book is a game-changer for anyone diving into programming. It covers a wide range of topics, starting from the basics and gradually progressing to more advanced concepts. The book's structure is well-organized, making it easy to follow along and build upon previous knowledge. The author's explanations are clear and concise, supplemented by practical examples that solidify understanding. Whether you're a novice or looking to enhance your coding skills, this book serves as an invaluable resource`,
  `I found this coding book to be incredibly approachable. It breaks down complex coding principles into digestible portions, making it suitable for beginners. What sets this book apart is its hands-on approach; each chapter includes exercises and projects that reinforce theoretical concepts. This interactive learning style helps bridge the gap between theory and practical application. While it might not cover every niche aspect of coding, it certainly provides a solid foundation for learners to build upon. A highly recommended read for those eager to embark on their coding journey.`
]

const name = ['Sophia Rodriguez', 'Alexander Nguyen', 'Ben Rogers']
const joined = [2018, 2017, 2020]


const Review: FC<ReviewProps> = ({index}) => {
  return (
    <div>
      <article className='border border-gray-200 rounded-lg p-4 m-4 bg-base-100'>
        <div className="flex items-center mb-4">
          <img className="w-10 h-10 me-4 rounded-full" src={avatars[index % 3]} alt="" />
          <div className="font-medium dark:text-white">
            <p><b className='text-gray-500'>{name[index % 3]}</b> <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August {joined[index % 3]}</time></p>
          </div>
        </div>
        <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
          <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
        </div>
        <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p></footer>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          {reviews[index % 3]}
        </p>
        <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
        <aside>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
          <div className="flex items-center mt-3">
            <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
            <a href="#" className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Report abuse</a>
          </div>
        </aside>
      </article>
    </div>
  );
}

export default Review;
