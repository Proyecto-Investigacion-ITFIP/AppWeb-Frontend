import { useUser } from '../context/userContext';
import React from 'react';

const PrivateComponent = ({ roleList, children }) => {
  const { usuarioData } = useUser();

  if (roleList.includes(usuarioData.rol)) {
    return children;
  }

  return <></>;
};

export default PrivateComponent;