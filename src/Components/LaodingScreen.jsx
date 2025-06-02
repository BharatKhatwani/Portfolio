// Loader.jsx
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="w-40 h-1 bg-gray-700 rounded overflow-hidden">
        <div className="h-full bg-[#4EC3FF] animate-loading"></div>
      </div>
      <style jsx>{`
        .animate-loading {
          animation: loadingBar 2s linear forwards;
          width: 0%;
        }
        @keyframes loadingBar {
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
