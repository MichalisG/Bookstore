import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <div className="flex-1">
      <Link to='/' className="btn btn-ghost text-xl">Bookstore</Link>
    </div>
  );
}

export default Logo;
