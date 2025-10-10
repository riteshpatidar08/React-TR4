import React from 'react';
import { Empty } from 'antd';
import { useState } from 'react';
const App = () => {
  const [data, setdata] = useState(null);
  return (
    <div>
      {!data && (
        <div className="m-20">
          <Empty />
        </div>
      )}
      {data && <h1>data available</h1>}
    </div>
  );
};
export default App;
