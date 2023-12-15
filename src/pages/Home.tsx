import React from 'react'
import heroImage from '../assets/image-1.png'
import { useSearchBooks } from '../hooks/useSearchBooks'
import Carousel from '../components/Carousel/Carousel'
import { shuffleArray } from '../utils/array'
import Title from '../components/Title'
type Props = {}

const Home = (props: Props) => {
  const {books} = useSearchBooks('')

  return (
    <div className=''>
      <div className="hero bg-gradient-to-r from-base-100 to-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={heroImage} className="max-w-xl rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold">Your Next Favorite Read Awaits</h1>
            <p className="py-6">Explore a wide range of books and find your next great read.</p>
          </div>
        </div>
      </div>
      <div className='p-8'>
        <Title title='Popular'/>
        <Carousel books={shuffleArray(books)}/>
      </div>
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://static.data.tsigaridasbooks.gr/9780008433932.jpg" className="max-w-xs rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">New Arival!</h1>
            <h1 className="text-2xl font-bold">Sir Gawain and the Green Knight: with Pearl and Sir Orfeo!</h1>
            <p className="py-6">This smart new paperback edition contains the fully-reset text of three medieval English poems, translated by Tolkien for the modern-day reader and containing romance, tragedy, love, sex and honour.</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className='p-8'>
        <Title title='Best Sellers of the Week'/>
        <Carousel books={shuffleArray(books)}/>
      </div>
    </div>
  )
}

export default Home
