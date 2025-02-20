import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FixedSizeList } from "react-window";

const data = Array.from({ length: 100001 }, (_, index) => `Item ${index}`);

  const renderItem = ({ index, style }) => (
    <div
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid lightgrey",
      }}
    >
      <span>{data[index]}</span>
    </div>
  );
  
  const VirtualizedListExample = () => (
    <div
      style={{ height: "800px", width: "300px", border: "1px solid lightgrey" }}
    >
      <FixedSizeList
        height={800}
        width={300}
        itemCount={data.length}
        itemSize={40} // Height of each row
      >
        {renderItem}
      </FixedSizeList>
    </div>
  );
  
  export default VirtualizedListExample;
  
    
