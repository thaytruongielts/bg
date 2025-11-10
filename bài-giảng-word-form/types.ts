// Fix: Import React to resolve 'Cannot find namespace 'React'' error for React.ReactNode type.
import React from 'react';

export type PageType = 'toc' | 'content' | 'table_drag_drop' | 'gap_fill_drag_drop';

export interface TOCPageData {
  type: 'toc';
  title: string;
}

export interface ContentPageData {
  type: 'content';
  title: string;
  subtitle?: string;
  content: (string | { type: 'table'; headers: string[]; rows: (string | React.ReactNode)[][]; caption?: string })[];
}

export interface TableDragDropExerciseData {
    type: 'table_drag_drop';
    title: string;
    instruction: string;
    words: string[];
    columns: {
        header: string;
        example: string;
    }[];
    solution: Record<string, string[]>;
}

export interface GapFillDragDropExerciseData {
    type: 'gap_fill_drag_drop';
    title: string;
    instruction: string;
    sentences: {
        id: number;
        prefix?: string;
        prompt: string;
        suffix?: string;
        answer: string;
    }[];
    words: string[];
}


export type Page = TOCPageData | ContentPageData | TableDragDropExerciseData | GapFillDragDropExerciseData;