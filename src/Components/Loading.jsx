// filepath: src/Components/Loading.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Loading = () => {
  return (
    <div className="flex items-center justify-center bg-slate-700 min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-stone-700"></div>
    </div>
  );
};

export default Loading;