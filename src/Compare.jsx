
import React, { useRef, useEffect } from 'react';
import D3PieChart from "./D3PieChart.jsx";
import './App.css';

/* App */
function App() {

    const budgetOverview = [
      { name: "Medical Center", value: 45 }, 
      { name: "Student Fees", value: 4 }, 
      { name: "State of California", value: 8 }, 
      { name: "Tuition", value: 11 }, 
      { name: "Research Grants and Contracts", value: 13 }, 
      { name: "Pell Grants", value: 1 }, 
      { name: "Dorms, Dining, and Other Services", value: 11 }, 
      { name: "Gifts, Endowments, Interest, Other", value: 7 } 
    ];

const operatingExpenditures = [
      {name: "Instruction and Academic Support", value: 23},
      {name: "Research", value: 11},
      {name: "Student Services and Financial Aid", value: 8}, 
      {name: "Operation and Maintenance", value: 2},
      {name: "Dorms, Dining and Other Services", value: 2}, 
      {name: "Campus Administration", value: 4},
      {name: "Medical Center", value: 43},
      {name: "Depreciation/Interest Expense/Other", value: 6},
      {name: "Public Service", value: 2}
    ];

    return (
        <div>
          <h3>Budget Overview</h3>
          <div  className="line2">
            <D3PieChart data={budgetOverview}/>
          </div>
          <h3>Operating Expenditures</h3>
          <div  className="line2">
            <D3PieChart data={operatingExpenditures}/>
          </div>
        </div>
    )
}

export default App;