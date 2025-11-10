
import React from 'react';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  isFirstPage: boolean;
  isLastPage: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, totalPages, onNext, onPrev, isFirstPage, isLastPage }) => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200 sticky bottom-0 z-10 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          onClick={onPrev}
          disabled={isFirstPage}
          className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg shadow-sm hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Trang trước</span>
        </button>
        <span className="font-semibold text-slate-600">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={onNext}
          disabled={isLastPage}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
        >
          <span>Tiếp theo</span>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </footer>
  );
};

export default Navigation;
