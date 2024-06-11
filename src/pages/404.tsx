import { Button } from '@/components/ui/button';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotfoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-center flex-nowrap">
      <p>{location.href}</p>
      <p>页面不存在</p>
      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        返回首页
      </Button>
    </div>
  );
};

export const Component = (): ReactElement => {
  return <NotfoundPage />;
};
