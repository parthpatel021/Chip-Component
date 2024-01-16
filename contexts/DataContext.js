// DataContext.js
import React, { createContext, useState } from 'react';
import data from '@/public/data';

const initialData = {
    chipData : [],
    mainData: data,
}

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };