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
import Icon from '@material-ui/core/Icon';


class EntryBox2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Medical_Center: '0', 
    Institution_and_Academic_Support: '0', 
    Research: '0', 
    Student_Services_and_Financial_Aid: '0', 
    Depreciation_Interest_Expenses: '0', 
    Institutional_Support: '0', 
    Other: '0'};
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
    const expData = [
      {name: "Medical Center", value: parseInt(this.state.Medical_Center,10), color: "#F0BF00"},
      {name: "Institution and Academic Support", value: parseInt(this.state.Institution_and_Academic_Support,10), color: "#f6e50e"},
      {name: "Research", value: parseInt(this.state.Research,10), color: "#fff688"}, 
      {name: "Student Services and Financial Aid", value: parseInt(this.state.Student_Services_and_Financial_Aid,10), color: "#5f63ec"},
      {name: "Depreciation/Interest Expenses", value: parseInt(this.state.Depreciation_Interest_Expenses,10), color: "#71a8ff"}, 
      {name: "Institutional Support", value: parseInt(this.state.Institutional_Support,10), color: "#d4e4ff"},
      {name: "Other", value: parseInt(this.state.Other,10), color: "white" }
    ];
    return (
    <div>
    <div className="slicePie">
    <div className="line2">
    <D3PieChart data={expData}/>
    </div>
    </div>
  <TableContainer >
  <Table  aria-label="simple table" style={{ color: 'green'}}>
    <TableHead>
      <TableRow>
        <TableCell style={{ color: 'white', fontWeight: 'bold'}}>Function</TableCell>
        <TableCell align="right" style={{ color: 'white', fontWeight: 'bold'}}>Percentage (%)</TableCell>      
      </TableRow>
    </TableHead>

    <TableBody>
        <TableRow >

          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}> 
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#F0BF00" />
            </svg>
            Medical Center 
            <MouseOverPopover name="The cost of providing care at the Medical Center is roughly what we get paid to provide it."/>
            </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue="0"
          onChange={(event) => {
          this.state['Medical_Center'] = event.target.value
          this.setState(this.state);
          this.props.sendDataUp(expData);
        }}/>
          </TableCell>
        </TableRow>

       <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}> 
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#F6E50E" />
          </svg>
          Institution and Academic Support
          <MouseOverPopover name="Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries."/>
          </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue="0"
          onChange={(event) => {
          this.state['Institution_and_Academic_Support'] = event.target.value
            this.setState(this.state);
            this.props.sendDataUp(expData);
        }}/>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}> 
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#FFF688" />
          </svg>
          Research
          <MouseOverPopover name="The costs of doing the research, mostly researcher salaries. "/>
          </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue="0"
          onChange={(event) => {
          this.state['Research'] = event.target.value
            this.setState(this.state);
            this.props.sendDataUp(expData);
        }}/>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}> 
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#5F63EC" />
          </svg>
          Student Services and Financial Aid
          <MouseOverPopover name="Student Health, things covered by fees, Admissions, and also financial aid from the general funds, which is about $100M or 1.5%."/>
          </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue="0"
          onChange={(event) => {
          this.state['Student_Services_and_Financial_Aid'] = event.target.value
            this.setState(this.state);
            this.props.sendDataUp(expData);
        }}/>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}> 
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#71A8FF" />
          </svg>
          Depreciation/Interest Expenses
          <MouseOverPopover name="Depreciation is the loss of value of buildings and equipment as they wear out. Mostly unavoidable financial losses."/>
          </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue="0"
          onChange={(event) => {
          this.state['Depreciation_Interest_Expenses'] = event.target.value
            this.setState(this.state);
            this.props.sendDataUp(expData);
        }}/>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}> 
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#0F7AB4" />
          </svg>
          Institutional Support
          <MouseOverPopover name="Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries."/>
          </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue="0"
          onChange={(event) => {
          this.state['Institutional_Support'] = event.target.value
            this.setState(this.state);
            this.props.sendDataUp(expData);
        }}/>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>
          <div style={{ display: "flex", flexDirection: "row" }}> 
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="10" fill="#D4E4FF" />
          </svg>
          Other
          <MouseOverPopover name="Any other expenses."/>
          </div>
          </TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
            id="standard-number"
            type="number"
            defaultValue="0"
          onChange={(event) => {
          this.state['Other'] = event.target.value
            this.setState(this.state);
            this.props.sendDataUp(expData);
        }}/>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell style={{ color: 'white', border: 'black'}}>Total %</TableCell>
          <TableCell align="right" style={{ color: 'white', border: 'black'}}>
          <TextField
          id="standard-read-only-input"
          type="number"
          value={(parseInt(this.state.Medical_Center)+parseInt(this.state.Institution_and_Academic_Support)+parseInt(this.state.Research)+parseInt(this.state.Student_Services_and_Financial_Aid)+parseInt(this.state.Depreciation_Interest_Expenses)+parseInt(this.state.Institutional_Support)+parseInt(this.state.Other)).toString()}
          InputProps={{
            readOnly: true,
          }}
        />
          </TableCell>
        </TableRow>
    </TableBody>
  </Table>
</TableContainer>
</div>
    

    );
  }
}

export default EntryBox2; 