import React from 'react'
import ReactLoading from 'react-loading';

const ButtonLoading = ({ disabled, loading, text }) => {
  return (
    <button
    disabled={disabled}
    type='submit'
    className='ml-80 mx-2 my-2 bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-400 rounded text-white px-6 py-2 text-xs'
    >
    { loading ? <ReactLoading type='spin' height={24} width={24} /> : text }
    </button>
  );
}

export { ButtonLoading };