import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen gap-4">
      <div className="text-xl">Not found what you are looking for...</div>
      <Button onClick={() => navigate('/')} name="Back to HomePage" />
    </div>
  );
}
