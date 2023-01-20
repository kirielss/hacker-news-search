import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();

  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage('dec')}>
        anterior
      </button>
      <p>
        {page + 1} de {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage('inc')}>
        próximo
      </button>
    </div>
  );
};

export default Buttons;
