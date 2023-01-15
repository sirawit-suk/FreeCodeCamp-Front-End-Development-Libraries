import { Link, useLocation } from 'react-router-dom';
import { NAVIGATIONS } from '../constants/navigations-constant';

// eslint-disable-next-line import/prefer-default-export
export function HomePage() {
  const { pathname: currentPath } = useLocation();

  return (
    <div>
      <h1 className="text-red-500">Welcome to my practice range!</h1>
      <ul>
        {Object.keys(NAVIGATIONS).map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
    </div>
  );
}
