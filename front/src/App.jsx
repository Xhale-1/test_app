import React, { useEffect, useState } from 'react';

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setTableData(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Продажи по месяцам</h1>
      <img src="/plot.png" alt="График" style={{ width: 600 }} />
      
      <table border="1" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Месяц</th>
            <th>Продажи</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, i) => (
            <tr key={i}>
              <td>{row.Месяц}</td>
              <td>{row.Продажи}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
