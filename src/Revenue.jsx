import React, { useRef, useEffect } from 'react';
import D3PieChart from "./D3PieChart.jsx";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import Form from "@material-ui/core/FormControl";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Popover from '@material-ui/core/Popover';
import MouseOverPopover from './PopoverHover.jsx';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import MyD3Component from './MyD3Component';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ffffff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      
    },
    
  },
});

const inputProps = {
  
  color: '#ffffff'
};


class EntryBox extends React.Component {


  constructor(props) {
    super(props);
    this.state = { Medical_Center: '0', 
    State_Unrestricted: '0', 
    Tuition: '0', 
    Student_Fees: '0', 
    Grants_and_Contracts: '0', 
    Sales_and_Service_Auxiliary: '0', 
    Gifts_Endowments_Interest: '0', 
    Other: '0'};

  // this.myChangeHandler = this.myChangeHandler.bind(this);       
  
  }
  

  /*
  myChangeHandler = (name, perc) => {
    let temp = this.state
    temp[name] = perc
    this.setState(temp);
    this.props.sendDataUp(temp);
  }
  */
  

  render() {

    
    const revData=[
      { name: "Medical Center", value: parseInt(this.state.Medical_Center, 10), color: "#F0BF00" }, 
      { name: "State Unrestricted", value: parseInt(this.state.State_Unrestricted,10), color: "#f6e50e" }, 
      { name: "Tuition", value: parseInt(this.state.Tuition,10), color: "#fff688" }, 
      { name: "Student Fees", value: parseInt(this.state.Student_Fees,10), color: "#5f63ec" }, 
      { name: "Grants and Contracts", value: parseInt(this.state.Grants_and_Contracts,10), color: "#71a8ff" }, 
      { name: "Sales and Service, Auxillary", value: parseInt(this.state.Sales_and_Service_Auxiliary,10), color: "#0f7ab4" }, 
      { name: "Gifts, Endowments, Interest", value: parseInt(this.state.Gifts_Endowments_Interest,10), color: "#7f8187" }, 
      { name: "Other", value: parseInt(this.state.Other,10), color: "white"} 
    ];
    

    return (
      
    <div>
    <ThemeProvider theme={theme}>
    <div className="slicePie">
      <D3PieChart data={revData}/>
    </div>
  <TableContainer >
  <Table aria-label="simple table" style={{ color: 'green'}}>
    <TableHead>
      <TableRow>
        <TableCell style={{ color: 'white', fontWeight: 'bold'}}>Function</TableCell>
        <TableCell align="right" style={{ color: 'white', fontWeight: 'bold'}}>Percentage (%)</TableCell>      
      </TableRow>
    </TableHead>

    <TableBody>
        <TableRow>
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}> 
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#F0BF00"/>
            </svg>

            Medical Center 
            <MouseOverPopover name="A large, not-for-profit regional medical center, including multiple hospitals, labs and clinics. Income comes from patients, medical insurance companies, and government programs like medicare. "/>
            </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            inputProps={inputProps}
            id="standard-number"
            color="palette.primary.main"
            type="number"
            
            defaultValue="0"
          onChange={(event) => {
            this.state['Medical_Center'] = event.target.value
            this.setState(this.state);  
            this.props.sendDataUp(revData);  
        }}/>
          </TableCell>
        </TableRow>

       <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}>
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#F6E50E" />
          </svg>
          State Unrestricted
          <MouseOverPopover name="General funds given by the taxpayers of California, appropriated annualy by the state legislature. General funds are not dedicated to specific services. "/>
          </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue="0"
          onChange={(event) => {
          this.state['State_Unrestricted'] = event.target.value
            this.setState(this.state);
            this.props.sendDataUp(revData);
        }}/>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}>
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#FFF688" />
          </svg>
          Tuition
          <MouseOverPopover name="Students pay tuition to attend the University. Non-California residents pay about twice as much as residents.  Tuition is also general funds."/>
          </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue="0"
          onChange={(event) => {
          this.state['Tuition'] = event.target.value
            this.setState(this.state);
            this.props.sendDataUp(revData);
        }}/>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}>
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#5F63EC" />
          </svg>
          Student Fees
          <MouseOverPopover name="Fees are dedicated to specific services, such as athletic facilities, bus service (UNITRANS), student organizations, the CoHo and Student Community Center, etc. "/>
          </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue="0"
          onChange={(event) => {
          this.state['Student_Fees'] = event.target.value
            this.setState(this.state);
            this.props.sendDataUp(revData);
            
        }}/>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}>
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#71A8FF" />
          </svg>
          Grants and Contracts
          <MouseOverPopover name="Government and industry funds given to faculty and graduate students to perform research projects. These include up to 50% overhead in addition to the cost of the research. Federal grants for tuition and living expenses for low-income students. Percentage of students with Pell grants is a good way to measure who a University serves; at UCD, it's 34%; at Cal Tech it's 14%; at Sac State it's 71%."/>
          </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue="0"
          onChange={(event) => {
          this.state['Grants_and_Contracts'] = event.target.value
            this.setState(this.state);
            this.props.sendDataUp(revData);
        }}/>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}>
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#0F7AB4" />
          </svg>
          Sales and Service, Auxiliary
          <MouseOverPopover name="Services other than education that people pay for, like dorms, dining, parking, etc.  At UC Davis, this also includes almost $500M of revenue generated by medical school faculty, or 8%, making this category look really big."/>
          </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue="0"
          onChange={(event) => {
          this.state['Sales_and_Service_Auxiliary'] = event.target.value
            this.setState(this.state);
            this.props.sendDataUp(revData);
        }}/>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}>
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#D4E4FF" />
          </svg>
          Gifts, Endowments, Interest
          <MouseOverPopover name="Endowments are past gifts that were invested to provide income; interest is earned on other savings. The Museum is the direct result of a $10M gift from Jan Shrem and Maria Manetti Shrem."/>
          </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue="0"
          onChange={(event) => {
          this.state['Gifts_Endowments_Interest'] = event.target.value
            this.setState(this.state);
            this.props.sendDataUp(revData);
        }}/>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}>
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="white" />
          </svg>
          Other
          <MouseOverPopover name="Any other revenues."/>
          </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue='0'
          onChange={(event) => {
          this.state['Other'] = event.target.value
            this.setState(this.state);
            this.props.sendDataUp(revData);
        }}/>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>Total %</TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
          id="standard-read-only-input"
          type="number"
          value={(parseInt(this.state.Medical_Center, 10)+parseInt(this.state.State_Unrestricted,10)+parseInt(this.state.Student_Fees,10)+parseInt(this.state.Grants_and_Contracts,10)+parseInt(this.state.Sales_and_Service_Auxiliary,10)+parseInt(this.state.Gifts_Endowments_Interest,10)+parseInt(this.state.Other,10)).toString()}
          InputProps={{
            readOnly: true,
          }}
        />
          </TableCell>
        </TableRow>
    </TableBody>
  </Table>
</TableContainer>
</ThemeProvider>
</div>


    

    );
  }
}
export default EntryBox;



