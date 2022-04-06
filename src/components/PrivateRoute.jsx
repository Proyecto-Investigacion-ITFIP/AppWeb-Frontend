import { useUser } from '../context/userContext';
import React from 'react';

const PrivateRoute = ({ roleList, children }) => {
  const { usuarioData } = useUser();
  if (roleList.includes(usuarioData.rol)) {
    return children;
  }

  return (
    <div data-testid='not-authorized' className='text-2xl text-red-500 '>
      No estás autorizado para ver este sitio.
    </div>
  );
};

export default PrivateRoute;