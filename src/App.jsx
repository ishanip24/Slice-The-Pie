// display chart and React 

import React, { useRef, useEffect, useState } from 'react';
import D3PieChart from "./D3PieChart.jsx";
import './App.css';
import EntryBox from './Revenue.jsx';
import EntryBox2 from './Expenses.jsx';
import './MyD3Component';
import './Expenses.jsx';
import './Compare.jsx';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import PieChartFunctional from "./PieChartFunctional.jsx";
import PieChartClass from 
"./PieChartClass.jsx";
import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';
import Box from '@material-ui/core/Box';

 
function App() {
  const [savedRevenue, setSavedRevenue] = useState({});
  const [savedExpenses, setSavedExpenses] = useState({});
  const [count, setCount] = useState(0);

  const actualRevenue = [
      { name: "Medical Center", value: 45, color: "#F0BF00" }, 
      { name: "State Unrestricted", value: 7, color: "#f6e50e" }, 
      { name: "Tuition", value: 11, color: "#fff688" }, 
      { name: "Student Fees", value: 4, color: "#5f63ec" }, 
      { name: "Grants and Contracts", value: 10, color: "#71a8ff" }, 
      { name: "Sales and Service, Auxillary", value: 11, color: "#0f7ab4" }, 
      { name: "Gifts, Endowments, Interest", value: 7, color: "#7f8187" }, 
      { name: "Other", value: 5, color: "white"} 
    ];

const actualExpenditures = [
      {name: "Medical Center", value: 43, color: "#F0BF00"},
      {name: "Instruction and Academic Support", value: 23, color: "#f6e50e"},
      {name: "Research", value: 11, color: "#fff688"}, 
      {name: "Student Services and Financial Aid", value: 8, color: "#5f63ec"},
      {name: "Depreciation/Interest Expenses", value: 6, color: "#71a8ff"}, 
      {name: "Institutional Support", value: 4, color: "#d4e4ff"},
      {name: "Other", value: 5, color: "white" }
    ];
    
   if(count==0){
    return (
      
      <Grid>

        <Container maxWidth="sm" style={{ backgroundColor: '#2E2E2E', maxWidth:"sm" }}>

        <div className = "slicePie">
          <h1>Slice the Pie</h1>
           
          <p>Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game. </p>
          <p>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost made.  </p>
           
          <Stepper alternativeLabel activeStep={0} maxWidth="xxs" style={{ backgroundColor: '#2E2E2E', maxWidth:"xs"}}>
            <Step>
              <StepLabel className='step' style={{ color: 'white'}}>Revenue</StepLabel>
              
            </Step>
            <Step>
              <StepLabel>Expenses</StepLabel>
            </Step>
            <Step>
              <StepLabel>Compare</StepLabel>
            </Step>
          </Stepper>
        </div>
    
      
        <div className = "subheader">
          <h1> UC Davis Revenues </h1>
        </div>
            <EntryBox sendDataUp={(revData) => setSavedRevenue(revData)} />
            <Button variant="outlined" style={{backgroundColor: 'white', borderRadius: 50, display: "flex", justifyContent: "center", alignItems: "center"}} onClick={() => setCount(count + 1)}>Next</Button>
        
        
        </Container>
        </Grid>
      
    
    )
    }
   else if (count==1){
     return(
       
        <Grid>
         <Container maxWidth="sm" style={{ backgroundColor: '#2E2E2E' }}>
        <div className = "slicePie">
          <h1>Slice the Pie</h1>
          <p>Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game. </p>
          <p>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost made.  </p>
          <Stepper activeStep={1} style={{ backgroundColor: '#2E2E2E'}}>
            <Step>addEventListener
              <StepLabel className = 'step' style={{ color: 'white'}}>Revenue</StepLabel>
              
            </Step>
            <Step>
              <StepLabel>Expenses</StepLabel>
            </Step>
            <Step>
              <StepLabel>Compare</StepLabel>
            </Step>
          </Stepper>
        </div>
          <div className = "subheader">
            <h1> UC Davis Expenditures </h1>
            </div>
            <EntryBox2 sendDataUp={(expData) => setSavedExpenses(expData)} />
            <Button id = "nextButton" variant="outlined" style={{backgroundColor: '#71A8FF', borderRadius: 50}} onClick={() => setCount(count + 1)}>Compare</Button>
            <br /> <br />
            <Button id = "nextButton" variant="outlined" style={{backgroundColor: '#7F8187', borderRadius: 50}} onClick={() => setCount(count - 1)}>Previous</Button>
          </Container>
          </Grid>
        
     )
   }
   else if(count==2){
        return(
       
       <Grid>
         <Container maxWidth="sm" style={{ backgroundColor: '#2E2E2E', maxWidth:"sm"}}>
        <div className = "slicePie">
          <h1>Slice the Pie</h1>
          <p>Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game. </p>
          <p>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost made.  </p>
          <Stepper activeStep={2} maxWidth="xs" style={{ backgroundColor: '#2E2E2E', maxWidth:"xs"}}>
            <Step>
              <StepLabel className = 'step' style={{ color: 'white'}}>Revenue</StepLabel>
        
            </Step>
            <Step>
              <StepLabel>Expenses</StepLabel>
            </Step>
            <Step>
              <StepLabel>Compare</StepLabel>
            </Step>
          </Stepper>
        </div>
          <div className = "subheader">
            <h1 className="results"> Results </h1>
            </div>
            <div className="guesses">Your Revenue Guess</div>
          <D3PieChart data={savedRevenue}/>
          <div className="guesses">Actual Revenues</div>
          <D3PieChart data={actualRevenue}/>
          <Button id = "nextButton" variant="outlined" style={{backgroundColor: 'white', borderRadius: 50}} onClick={() => setCount(count+1)}>Next</Button>
          </Container>
          </Grid>
        
     )
   }
   else if(count==3){
        return(
       
       <Grid>
         <Container maxWidth="sm" style={{ backgroundColor: '#2E2E2E' }}>
        <div className = "slicePie">
          <h1>Slice the Pie</h1>
          <p>Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game. </p>
          <p>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost made.  </p>
          <Stepper activeStep={3} maxWidth="xs" style={{ backgroundColor: '#2E2E2E'}}>
            <Step>
              <StepLabel className = 'step' style={{ color: 'white'}}>Revenue</StepLabel>
              
            </Step>
            <Step>
              <StepLabel>Expenses</StepLabel>
            </Step>
            <Step>
              <StepLabel>Compare</StepLabel>
            </Step>
          </Stepper>
        </div>
          <div className = "subheader">
            <h1 className="results"> Results </h1>
            </div>
            <div className="guesses">Your Expenditure Guess</div>
          <D3PieChart data={savedExpenses}/>
          <div className="guesses">Actual Expenditures</div>
          <D3PieChart data={actualExpenditures}/>
          <Button id = "nextButton" variant="outlined" style={{backgroundColor: 'white', borderRadius: 50}} onClick={() => setCount(0)}>Restart</Button>
          </Container>
          </Grid>
        
     )
   }
}


export default App;

