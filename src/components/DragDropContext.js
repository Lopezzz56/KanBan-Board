// // DragDropContext.js
// import React, { createContext, useContext, useState } from 'react';

// const DragDropContext = createContext();

// export const DragDropProvider = ({ children }) => {
//     const [cards, setCards] = useState(Default_Cards); // Replace with your initial card data.

//     const deleteCard = (id) => {
//         setCards((prevCards) => prevCards.filter((card) => card.id !== id));
//     };

//     return (
//         <DragDropContext.Provider value={{ cards, setCards, deleteCard }}>
//             {children}
//         </DragDropContext.Provider>
//     );
// };

// export const useDragDrop = () => {
//     return useContext(DragDropContext);
// };
