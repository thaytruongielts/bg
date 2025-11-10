
import React from 'react';
import { ContentPageData } from '../types';

interface ContentPageProps {
  data: ContentPageData;
}

const ContentPage: React.FC<ContentPageProps> = ({ data }) => {
  return (
    <div className="animate-fade-in space-y-5 flex-grow">
      <h2 className="text-3xl font-bold text-blue-700">{data.title}</h2>
      {data.subtitle && <h3 className="text-xl font-semibold text-slate-600 -mt-3">{data.subtitle}</h3>}
      <div className="prose max-w-none text-lg text-slate-700">
        {data.content.map((item, index) => {
          if (typeof item === 'string') {
            return <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>;
          }
          if (item.type === 'table') {
            return (
              <div key={index} className="my-6 overflow-x-auto">
                <table className="w-full border-collapse border border-slate-300">
                  <thead>
                    <tr className="bg-slate-100">
                      {item.headers.map((header, hIndex) => (
                        <th key={hIndex} className="border border-slate-300 p-3 text-left font-semibold text-slate-800">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows.map((row, rIndex) => (
                      <tr key={rIndex} className="odd:bg-white even:bg-slate-50">
                        {row.map((cell, cIndex) => (
                          <td key={cIndex} className="border border-slate-300 p-3" dangerouslySetInnerHTML={{ __html: String(cell) }}></td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {item.caption && <p className="text-center text-sm text-slate-500 mt-2">{item.caption}</p>}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ContentPage;
