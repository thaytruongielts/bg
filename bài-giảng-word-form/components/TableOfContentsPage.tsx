
import React from 'react';
import { Page } from '../types';

interface TableOfContentsPageProps {
  pages: Page[];
  goToPage: (index: number) => void;
}

const TableOfContentsPage: React.FC<TableOfContentsPageProps> = ({ pages, goToPage }) => {
  return (
    <div className="flex flex-col h-full animate-fade-in">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">📚 Mục Lục</h2>
      <ul className="space-y-3 overflow-y-auto pr-2">
        {pages.map((page, index) => (
           'title' in page && (
            <li key={index}>
              <button
                onClick={() => goToPage(index)}
                className="w-full text-left text-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200"
              >
                <span className="font-semibold">{index + 1}.</span> {page.title}
              </button>
            </li>
           )
        ))}
      </ul>
    </div>
  );
};

export default TableOfContentsPage;
