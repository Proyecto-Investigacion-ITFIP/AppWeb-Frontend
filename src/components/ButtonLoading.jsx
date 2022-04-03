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
};

const ButtonLoadingRg= ({ disabled, loading, text }) => {
  return (
    <button
    disabled={disabled}
    type='submit'
    className='bg-transparent hover:bg-sky-800 text-gray-100 font-semibold hover:text-white m-4 py-2 px-16 border rounded-full  border-gray-100 hover:border-transparent'
    >
    { loading ? <ReactLoading type='spin' height={24} width={24} /> : text }
    </button>
  );
}


export { ButtonLoading, ButtonLoadingRg };