import React, { createContext, useContext, useState, useEffect } from 'react';

interface Data {
  rank: number;
  percentile: number;
  score: number;
}

interface DataContextType {
  data: Data;
  setData: (value: Data) => void;
}

const defaultData: Data = { rank: 0, percentile: 0, score: 0 };

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<Data>(defaultData);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') { // Ensure this code runs only in the client
      const storedData = localStorage.getItem('dataKey');
      if (storedData) {
        setData(JSON.parse(storedData));
      }
    }
  }, []);

  // Update localStorage whenever data changes
  useEffect(() => {
    if (typeof window !== 'undefined') { // Ensure this code runs only in the client
      localStorage.setItem('dataKey', JSON.stringify(data));
    }
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useDataContext must be used within a DataProvider');
  return context;
};
