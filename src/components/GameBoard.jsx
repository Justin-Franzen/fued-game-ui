import React from "react";

const GameBoard = () => {
  const rows = [
    { id: 0, question: "Answer 1", points: 10, order: 0, show: false },
    { id: 1, question: "Answer 2", points: 20, order: 2, show: true },
    { id: 2, question: "Answer 3", points: 20, order: 4, show: false },
    { id: 3, question: "0123456789012345678901", points: 30, order: 6, show: true },
    { id: 4, question: "", points: 0, order: 1, show: false },
    { id: 5, question: "", points: 0, order: 3, show: false },
    { id: 6, question: "", points: 0, order: 5, show: false },
    { id: 7, question: "", points: 0, order: 7, show: false },
  ];

  // Ensure there are always 8 rows by filling with placeholders
  const totalRows = 8;
  const filledRows = [...rows];
  while (filledRows.length < totalRows) {
    filledRows.push({ question: "----", points: "--", order: filledRows.length });
  }


  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-8xl w-full bg-gray-800 text-white rounded-lg shadow-lg p-20">
        <h1 className="text-9xl font-bold text-center mb-8">Family Feud Board</h1>
        <div className="grid grid-cols-2 gap-4 items-start">
          {filledRows.sort((a, b) => a.order - b.order).map((row) => (
            <div
              key={row.order}
              className="flex justify-between items-center bg-gray-700 p-3 rounded-md shadow-md h-fit"
            >
              {row.points !== 0 ? (
                row.show ? (
                  <>
                    <span className="text-6xl font-semibold">{row.question}</span>
                    <span className="text-7xl font-bold">{row.points}</span>
                  </>
                ) : (<span className="text-7xl font-semibold text-center w-full">{row.id + 1}</span>)
              ) : <span className="h-18" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;