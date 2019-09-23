import React, { Component } from "react";
import config from "./config";

const url = `https://sheets.googleapis.com/v4/spreadsheets/${
  config.spreadsheetId
}/values:batchGet?ranges=Arkusz1&majorDimension=ROWS&key=${config.apiKey}`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      items: []
    };
  }
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let batchRowValues = data.valueRanges[0].values;
        console.log(batchRowValues);
        const rows = [];
        for (let i = 1; i < batchRowValues.length; i++) {
          let rowObject = {};
          for (let j = 0; j < batchRowValues[i].length; j++) {
            rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
          }
          rows.push(rowObject);
        }

        this.setState({ items: rows });
        console.log(this.state.items);
      });
  }

  render() {
    return <p>Tu narazie jest ściernisko</p>;
  }
}

export default App;
