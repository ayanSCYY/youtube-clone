import React from 'react';
import PropTypes from 'prop-types';

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onClose }) => {
  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center h-screen w-screen px-4 md:px-10'>
      <div className='flex flex-col  justify-center items-center bg-white border-2 border-gray-300 shadow-lg rounded-lg w-full max-w-sm p-10'>
        <div className='text-center mb-4'>
          <p className='text-gray-800 font-medium text-lg'>{message}</p>
        </div>
        <button
          onClick={onClose}
          className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 ease-in-out'
        >
          OK
        </button>
      </div>
    </div>
  );
}

CustomAlert.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default CustomAlert;
