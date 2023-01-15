import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <div>NotFound</div>
      <Link to="/">Go home!</Link>
    </>
  );
}
