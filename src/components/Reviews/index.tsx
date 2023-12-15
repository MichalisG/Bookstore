import type { FC } from 'react';
import Review from './Review';

interface ReviewsProps {
  reviews: number[]
}

// This is a mock component for now 
const Reviews: FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className='mt-12'>
      {
        reviews.map((_, i) => (
          <Review index={i}/>
        ))
      }
    </div>
  );
}

export default Reviews;
