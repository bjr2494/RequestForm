import React from 'react';
import logo from './logo.svg';
import './App.css';
import Request from './Request';
import { getCurrentDateTime } from './DateTime';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            firstName: "",
            lastName: "",
            dateOfRequest: getCurrentDateTime(),
            detailsOfRequest: "",
            count: 0,
            hasRequests: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.addItem = this.addItem.bind(this);
        //this.removeRequest = this.removeRequest.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClickAdd() {
      
        this.setState((prevState) => {
            this.setState({count: prevState.count + 1})
            this.setState({hasRequests: true})
        })
    }

    addItem(e) {
        let newInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dateOfRequest: this.state.dateOfRequest,
            detailsOfRequest: this.state.detailsOfRequest,
            count: this.state.count,
            hasRequests: this.state.hasRequests
        }
        this.setState((prevState) => {
            return {
              items: prevState.items.concat(newInfo)
            }
        });

          console.log(this.state.items);
          e.preventDefault();
    }

    render() {
        let hasRequests = this.state.hasRequests;
        let requestHeader;

        if (hasRequests) {
            requestHeader = this.state.count === 1 ? 'The Request' : 'The Requests';  
        }
        else {
            requestHeader = 'No Requests Yet';
        }
        return (
            <div align="center">
              <form onSubmit={this.addItem}>
                  <h1>Enter Your Health Request Here</h1> 
                  <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
                  <br />
                  <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
                  <br />
                  <input type="hidden" name="dateOfRequest"
                       onChange={this.handleChange} />
                  <textarea type="text" name="detailsOfRequest" placeholder="Details"
                       onChange={this.handleChange} />
                  <br />
                  <button onClick={this.handleClickAdd}>Submit</button>
              </form>
                <h2>{requestHeader}</h2>
                <Request entries={this.state.items}
                />
            </div>
        )
    }
}

export default App;
