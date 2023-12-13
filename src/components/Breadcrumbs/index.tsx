import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
interface BreadcrumbsProps {}

// TODO move to utils
function capitalizeFirstLetter(str: string) {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}


const Breadcrumbs: FC<BreadcrumbsProps> = () => {
  const location = useLocation()

  // Do not show on home page
  if(location.pathname === '/') {
    return null
  }

  let currentLink = ''

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`;

      return (
        <li><Link to={currentLink}>{capitalizeFirstLetter(crumb)}</Link></li> 
      )
    })

  return (
    <div className="p-10 text-sm breadcrumbs">
      <ul>
        <li><Link to='/'>Home</Link></li> 
        {crumbs}
        {/* <li><a>Documents</a></li>
        <li>Add Document</li> */}
      </ul>
    </div>

  );
}

export default Breadcrumbs;
