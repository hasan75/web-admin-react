import React from 'react';
import simStyle from './SimCards.module.css';

const SimCards = () => {
  return (
    <section>
      <h1 className='fw-bold text-center mt-5'>Sim Card Dashboard</h1>
      <div className='row d-flex flex-row justify-content-center align-items-center my-5'>
        <div className='col-md-1'></div>
        <div
          className={`${simStyle.infoCOntainer} col-md-2 border rounded-1 p-3 m-1 text-center`}
        >
          <p>All Sim Cards</p>
          <span className='d-block fw-bold'>999</span>
        </div>
        <div
          className={`${simStyle.infoCOntainer} col-md-2 border rounded-1 p-3 m-1 text-center`}
        >
          <p>Active</p>
          <span className='d-block fw-bold'>100</span>
        </div>
        <div
          className={`${simStyle.infoCOntainer} col-md-2 border rounded-1 p-3 m-1 text-center`}
        >
          <p>Non Active</p>
          <span className='d-block fw-bold'>899</span>
        </div>
        <div
          className={`${simStyle.infoCOntainer} col-md-2 border rounded-1 p-3 m-1 text-center`}
        >
          <p>Assigned</p>
          <span className='d-block fw-bold'>20</span>
        </div>
        <div
          className={`${simStyle.infoCOntainer} col-md-2 border rounded-1 p-3 m-1 text-center`}
        >
          <p>Non Assigned</p>
          <span className='d-block fw-bold'>80</span>
        </div>
      </div>
    </section>
  );
};

export default SimCards;
