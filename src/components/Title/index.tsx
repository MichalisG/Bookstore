import type { FC } from 'react';

interface TitleProps {
  title: string
}

const Title: FC<TitleProps> = ({title}) => {
  return (
    <div>
      <div className="!gap-0 divider divider-start divider-neutral ">
        <h2
          className='text-2xl font-bold p-1 pl-4 pr-4 border-b-2 border-neutral'>
          {title}
        </h2>
      </div>
    </div>
  );
}

export default Title;
