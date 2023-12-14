import type { FC } from 'react';
import Rating from '../Rating';

interface Props {
  title: string;
  subtitle?: string;
  button?: string;
  image?: string;
}

const getRandomArbitrary = (min: number, max: number) => Math.random() * (max - min) + min;

const Card: FC<Props> = (props) => {
  const {
    title,
    button,
    image
  } = props;
  return (
    <div className="card w-56 bg-base-100 shadow-md m-4 pt-4">
      <figure className="h-40">
        {image ? <img src={image} alt="Shoes" className="rounded-xl h-40" /> : null}
      </figure>
      <div className='flex justify-center mt-2'>
        <Rating/>
      </div>
      <div className="card-body items-center text-center">
        <h4 className="text-sm font-medium h-20">{title}</h4>
        <p className='text-accent'>${(getRandomArbitrary(1000, 10000) / 100).toFixed(2)}</p>
        <div className="card-actions">
          {button ? <button className="btn btn-primary btn-sm">{button}</button> : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
