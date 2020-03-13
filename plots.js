d3.json("data/data.json").then((importedData) => {
  // console.log(importedData);
  let data = importedData;
  //sort dscending
  data = data.sort((a, b) => parseFloat(b.greekSearchResults) - parseFloat(a.greekSearchResults));
  
  // data slice top 10, first 10 
  data = data.slice(0,10);

  // reverse array
  data = data.reverse();

  let labels = data.map((result) => result.greekName)

  let trace = {
    x: data.map((row) => row.greekSearchResults),
    y: labels,
    text: labels,
    name: "Greek ",
    type: "bar",
    orientation: "h"
  }

  let chart_data = [trace];

  let layout = {
    title: "Greek Gods Search Results",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  }

  Plotly.newPlot("plot", chart_data, layout);

});