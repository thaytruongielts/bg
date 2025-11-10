
import React, { useState, useCallback } from 'react';
import { LESSON_PAGES } from './constants/lessonData';
import PageViewer from './components/PageViewer';
import Navigation from './components/Navigation';
import Header from './components/Header';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const goToNextPage = useCallback(() => {
    setCurrentPageIndex((prev) => Math.min(prev + 1, LESSON_PAGES.length - 1));
  }, []);

  const goToPreviousPage = useCallback(() => {
    setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToPage = useCallback((index: number) => {
    if (index >= 0 && index < LESSON_PAGES.length) {
      setCurrentPageIndex(index);
    }
  }, []);

  const currentPageData: Page = LESSON_PAGES[currentPageIndex];
  
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 transform hover:shadow-2xl">
           <div className="p-6 md:p-10 min-h-[60vh] md:min-h-[70vh] flex flex-col">
            <PageViewer 
              key={currentPageIndex} 
              pageData={currentPageData} 
              pages={LESSON_PAGES} 
              goToPage={goToPage} 
            />
          </div>
        </div>
      </main>
      <Navigation
        currentPage={currentPageIndex + 1}
        totalPages={LESSON_PAGES.length}
        onNext={goToNextPage}
        onPrev={goToPreviousPage}
        isFirstPage={currentPageIndex === 0}
        isLastPage={currentPageIndex === LESSON_PAGES.length - 1}
      />
    </div>
  );
};

export default App;
