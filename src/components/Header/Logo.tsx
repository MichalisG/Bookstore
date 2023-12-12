import type { FC } from 'react';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Bookstore</a>
    </div>
  );
}

export default Logo;
