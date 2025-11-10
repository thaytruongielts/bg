
import React, { useState, useMemo } from 'react';
import { TableDragDropExerciseData } from '../types';

interface Placements {
  [columnHeader: string]: string[];
}

const DraggableWord: React.FC<{ word: string }> = ({ word }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', word);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-md cursor-grab active:cursor-grabbing shadow-sm hover:bg-blue-200 transition-all text-center"
    >
      {word}
    </div>
  );
};

const TableDragDropExercise: React.FC<{ data: TableDragDropExerciseData }> = ({ data }) => {
  const initialPlacements = useMemo(() => 
    data.columns.reduce((acc, col) => ({ ...acc, [col.header]: [] }), {} as Placements), 
    [data.columns]
  );

  const [placements, setPlacements] = useState<Placements>(initialPlacements);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const placedWords = useMemo(() => new Set(Object.values(placements).flat()), [placements]);
  const unplacedWords = useMemo(() => data.words.filter(word => !placedWords.has(word)), [data.words, placedWords]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, columnHeader: string) => {
    e.preventDefault();
    const word = e.dataTransfer.getData('text/plain');
    if (word && !placements[columnHeader].includes(word)) {
        const newPlacements = { ...placements };
        // Remove from other columns if it exists
        Object.keys(newPlacements).forEach(key => {
            newPlacements[key] = newPlacements[key].filter(w => w !== word);
        });
        // Add to the new column
        newPlacements[columnHeader] = [...newPlacements[columnHeader], word];
        setPlacements(newPlacements);
        setShowFeedback(false);
    }
    e.currentTarget.classList.remove('bg-green-100');
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-green-100');
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('bg-green-100');
  };

  const handleReturnToBank = (word: string) => {
    const newPlacements = { ...placements };
    Object.keys(newPlacements).forEach(key => {
        newPlacements[key] = newPlacements[key].filter(w => w !== word);
    });
    setPlacements(newPlacements);
    setShowFeedback(false);
  };

  const checkAnswers = () => {
      setShowFeedback(true);
  };

  const resetExercise = () => {
    setPlacements(initialPlacements);
    setShowFeedback(false);
  };

  const getBorderColor = (columnHeader: string, word: string) => {
      if (!showFeedback) return 'border-slate-300';
      return data.solution[columnHeader]?.includes(word) ? 'border-green-500' : 'border-red-500';
  }

  return (
    <div className="flex flex-col h-full animate-fade-in">
      <h2 className="text-3xl font-bold text-blue-700 mb-2">{data.title}</h2>
      <p className="text-lg text-slate-600 mb-6">{data.instruction}</p>

      <div 
        className="mb-6 p-4 border-2 border-dashed border-slate-300 rounded-lg min-h-[100px] flex flex-wrap gap-3 items-center"
        onDrop={(e) => handleDrop(e, 'bank')} // A conceptual bank
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {unplacedWords.length > 0 ? unplacedWords.map(word => <DraggableWord key={word} word={word} />) : <p className="text-slate-500">Tất cả các từ đã được xếp!</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
        {data.columns.map(col => (
          <div key={col.header} className="flex flex-col bg-slate-50 rounded-lg p-3 border border-slate-200">
            <h3 className="font-bold text-center text-slate-800 bg-slate-200 p-2 rounded-t-md">{col.header}</h3>
            <div 
              onDrop={(e) => handleDrop(e, col.header)} 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className="flex-grow p-3 min-h-[150px] space-y-2 transition-colors rounded-b-md"
            >
              {placements[col.header].map(word => (
                 <div key={word} onClick={() => handleReturnToBank(word)} className={`p-2 bg-white rounded-md shadow-sm border-2 cursor-pointer transition-all ${getBorderColor(col.header, word)}`}>
                    {word}
                 </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-end space-x-4">
        <button onClick={resetExercise} className="px-4 py-2 bg-slate-500 text-white rounded-lg shadow-sm hover:bg-slate-600 transition-colors">Làm lại</button>
        <button onClick={checkAnswers} className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-700 transition-colors">Kiểm tra</button>
      </div>
    </div>
  );
};

export default TableDragDropExercise;
