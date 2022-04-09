import React from 'react';
import { useParams } from 'react-router-dom';

const SimCardDetails = () => {
  const id = useParams();
  console.log(id);
  return (
    <div>
      <h1 align='center'>Details of {id.ssId}</h1>
    </div>
  );
};

export default SimCardDetails;
