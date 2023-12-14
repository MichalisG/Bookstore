import type { FC } from 'react';
import Review from './Review';

interface ReviewsProps {
  reviews: number[]
}

// This is a mock component for now 
const Reviews: FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className=''>
      <h2 className='text-2xl font-bold p-4'>Reviews</h2>
      {
        reviews.map((_, i) => (
          <Review index={i}/>
        ))
      }
    </div>
  );
}

export default Reviews;
