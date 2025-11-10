
import React from 'react';
import { Page } from '../types';
import TableOfContentsPage from './TableOfContentsPage';
import ContentPage from './ContentPage';
import TableDragDropExercise from './TableDragDropExercise';
import GapFillDragDropExercise from './GapFillDragDropExercise';

interface PageViewerProps {
  pageData: Page;
  pages: Page[];
  goToPage: (index: number) => void;
}

const PageViewer: React.FC<PageViewerProps> = ({ pageData, pages, goToPage }) => {
  switch (pageData.type) {
    case 'toc':
      return <TableOfContentsPage pages={pages} goToPage={goToPage} />;
    case 'content':
      return <ContentPage data={pageData} />;
    case 'table_drag_drop':
      return <TableDragDropExercise data={pageData} />;
    case 'gap_fill_drag_drop':
        return <GapFillDragDropExercise data={pageData} />;
    default:
      return <div>Page type not supported.</div>;
  }
};

export default PageViewer;
