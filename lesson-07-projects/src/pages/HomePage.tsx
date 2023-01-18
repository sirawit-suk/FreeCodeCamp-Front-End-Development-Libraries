import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAVIGATIONS } from '../constants/navigations-constant';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

// eslint-disable-next-line import/prefer-default-export
export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-gray-800 text-3xl my-8">Home page</h1>
      <Card>
        <div className="font-bold text-xl mb-4">Menu</div>
        <div className="flex flex-col items-center w-full  gap-4">
          {Object.keys(NAVIGATIONS).map((key) => (
            <Button
              key={key}
              onClick={() => navigate(NAVIGATIONS[key].path)}
              name={key}
              className="w-5/6"
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
