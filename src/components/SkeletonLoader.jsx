import React from 'react';

const SkeletonLoader = ({ className = '', type = 'image' }) => {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]';
  
  if (type === 'image') {
    return (
      <div className={`${baseClasses} ${className}`}>
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'text') {
    return <div className={`${baseClasses} rounded ${className}`} />;
  }

  if (type === 'circle') {
    return <div className={`${baseClasses} rounded-full ${className}`} />;
  }

  return <div className={`${baseClasses} ${className}`} />;
};

export default SkeletonLoader;
