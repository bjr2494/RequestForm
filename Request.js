import React from "react";
import { getCurrentDateTime } from "./DateTime";
import App from "./App";

class Request extends React.Component {

    createInfos(item) {
            return ( <div key={item.key}>
                    <p>Request No. {item.count}</p>
                    <p>First Name: {item.firstName}</p>
                    <p>Last Name: {item.lastName}</p>
                    <p>Date of Request: { getCurrentDateTime() }</p>
                    <p>Details: {item.detailsOfRequest}</p>
                    <hr />
                </div>
            )
    }

    render() {

        let infoEntries = this.props.entries;
        let listItems = infoEntries.map(this.createInfos);


        return (
            <div>
               {listItems}
            </div>
        )
    }
}

export default Request;