import type { FC } from 'react';
import Rating from '../Rating';

interface Props {
  title: string;
  subtitle?: string;
  button?: string;
  image?: string;
}

const Card: FC<Props> = (props) => {
  const {
    title,
    button,
    image
  } = props;
  return (
    <div className="card w-56 bg-base-100 shadow-xl m-4">
      <figure className="h-40">
        {image ? <img src={image} alt="Shoes" className="rounded-xl h-40" /> : null}
      </figure>
      <div className='flex justify-center mt-2'>
        <Rating/>
      </div>
      <div className="card-body items-center text-center">
        <h4 className="text-sm font-medium">{title}</h4>
        <div className="card-actions">
          {button ? <button className="btn btn-primary btn-sm">{button}</button> : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
