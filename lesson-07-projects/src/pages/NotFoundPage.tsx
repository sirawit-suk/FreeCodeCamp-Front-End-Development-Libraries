import { Link } from 'react-router-dom';
import { GoBack } from '../components';

export function NotFoundPage() {
  return (
    <>
      <GoBack />
      <div>NotFound</div>
      <Link to="/">Go home!</Link>
    </>
  );
}
