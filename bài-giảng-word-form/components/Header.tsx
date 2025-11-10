import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
            <div className="text-xl text-blue-600"><i className="fas fa-book-open"></i></div>
            <h1 className="text-lg md:text-xl font-bold text-slate-700">Bài giảng Word Form</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;