import React from 'react';
import { useParams } from 'react-router-dom';

const SimCardReturn = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Sim Card Return of {id}</h2>
    </div>
  );
};

export default SimCardReturn;
