
import React, { useState, useMemo } from 'react';
import { GapFillDragDropExerciseData } from '../types';

interface Placements {
  [sentenceId: number]: string | null;
}

const DraggableWord: React.FC<{ word: string }> = ({ word }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', word);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-md cursor-grab active:cursor-grabbing shadow-sm hover:bg-blue-200 transition-all"
    >
      {word}
    </div>
  );
};

const GapFillDragDropExercise: React.FC<{ data: GapFillDragDropExerciseData }> = ({ data }) => {
  const initialPlacements = useMemo(() => 
    data.sentences.reduce((acc, s) => ({ ...acc, [s.id]: null }), {} as Placements),
    [data]
  );

  const [placements, setPlacements] = useState<Placements>(initialPlacements);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const placedWords = useMemo(() => new Set(Object.values(placements).filter(Boolean)), [placements]);
  const unplacedWords = useMemo(() => data.words.filter(word => !placedWords.has(word as string)), [data.words, placedWords]);

  const handleDrop = (e: React.DragEvent<HTMLSpanElement>, sentenceId: number) => {
    e.preventDefault();
    const word = e.dataTransfer.getData('text/plain');
    if (word) {
        const newPlacements = { ...placements };

        // Find if this word was placed elsewhere and clear that spot
        Object.keys(newPlacements).forEach(key => {
            const id = parseInt(key);
            if (newPlacements[id] === word) {
                newPlacements[id] = null;
            }
        });
        
        newPlacements[sentenceId] = word;
        setPlacements(newPlacements);
        setShowFeedback(false);
    }
    e.currentTarget.classList.remove('bg-green-200', 'scale-105');
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLSpanElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-green-200', 'scale-105');
  };

  const handleDragLeave = (e: React.DragEvent<HTMLSpanElement>) => {
    e.currentTarget.classList.remove('bg-green-200', 'scale-105');
  };

  const handleReturnToBank = (sentenceId: number) => {
    setPlacements(prev => ({...prev, [sentenceId]: null}));
    setShowFeedback(false);
  };

  const checkAnswers = () => {
    setShowFeedback(true);
  };

  const resetExercise = () => {
    setPlacements(initialPlacements);
    setShowFeedback(false);
  };
  
  const getDropZoneStyle = (sentenceId: number, answer: string) => {
    const placedWord = placements[sentenceId];
    if (!showFeedback || !placedWord) return 'border-slate-400 bg-slate-100 text-slate-400';
    return placedWord === answer ? 'border-green-500 bg-green-100 text-green-800' : 'border-red-500 bg-red-100 text-red-800';
  }

  return (
    <div className="flex flex-col h-full animate-fade-in">
      <h2 className="text-3xl font-bold text-blue-700 mb-2">{data.title}</h2>
      <p className="text-lg text-slate-600 mb-6">{data.instruction}</p>

      <div 
        className="mb-6 p-4 border-2 border-dashed border-slate-300 rounded-lg min-h-[80px] flex flex-wrap gap-3 items-center"
      >
        {unplacedWords.length > 0 ? unplacedWords.map(word => <DraggableWord key={word} word={word} />) : <p className="text-slate-500">Tuyệt vời! Bạn đã điền hết các từ.</p>}
      </div>

      <div className="space-y-4 text-lg">
        {data.sentences.map(sentence => (
          <div key={sentence.id} className="flex items-center flex-wrap">
            {sentence.prefix && <span className="mr-2">{sentence.prefix}</span>}
            <span 
              onDrop={(e) => handleDrop(e, sentence.id)}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => handleReturnToBank(sentence.id)}
              className={`inline-block min-w-[150px] min-h-[40px] px-3 py-1 border-b-2 border-dashed rounded-md text-center align-middle transition-all duration-200 cursor-pointer ${getDropZoneStyle(sentence.id, sentence.answer)}`}
            >
              {placements[sentence.id] || '...'}
            </span>
            <span className="ml-2">{sentence.prompt}</span>
            {sentence.suffix && <span className="ml-2 text-slate-500">{sentence.suffix}</span>}
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6 flex items-center justify-end space-x-4">
        <button onClick={resetExercise} className="px-4 py-2 bg-slate-500 text-white rounded-lg shadow-sm hover:bg-slate-600 transition-colors">Làm lại</button>
        <button onClick={checkAnswers} className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-700 transition-colors">Kiểm tra</button>
      </div>
    </div>
  );
};

export default GapFillDragDropExercise;
