// function init() {
//     // Grab a reference to the dropdown select element
//     var selector = d3.select("#selDataset");
  
//     // Use the list of sample names to populate the select options
//     d3.json("samples.json").then((data) => {
//       var sampleNames = data.names;
  
//       sampleNames.forEach((sample) => {
//         selector
//           .append("option")
//           .text(sample)
//           .property("value", sample);
//       });
  
//       // Use the first sample from the list to build the initial plots
//       var firstSample = sampleNames[0];
//       buildCharts(firstSample);
//       buildBubbleCharts(firstSample);
//       buildGaugeCharts(firstSample);
//       buildMetadata(firstSample);
//     });
//   }
  
//   // Initialize the dashboard
//   init();
  
//   function optionChanged(newSample) {
//     // Fetch new data each time a new sample is selected
//     buildMetadata(newSample);
//     buildCharts(newSample);
//     buildBubbleCharts(newSample);
//     buildGaugeCharts(newSample);
    
//   }
  
//   // Demographics Panel 
//   function buildMetadata(sample) {
//     d3.json("samples.json").then((data) => {
//       var metadata = data.metadata;
//       // Filter the data for the object with the desired sample number
//       var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//       var result = resultArray[0];
//       // Use d3 to select the panel with id of `#sample-metadata`
//       var PANEL = d3.select("#sample-metadata");
  
//       // Use `.html("") to clear any existing metadata
//       PANEL.html("");
  
//       // Use `Object.entries` to add each key and value pair to the panel
//       // Hint: Inside the loop, you will need to use d3 to append new
//       // tags for each key-value in the metadata.
//       Object.entries(result).forEach(([key, value]) => {
//         PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
//       });
  
//     });
//   }
  
//   // 1. Create the buildCharts function.
//   function buildCharts(sample) {
//     // 2. Use d3.json to load and retrieve the samples.json file 
//     d3.json("samples.json").then((data) => {
//       // 3. Create a variable that holds the samples array. 
//       var samples = data.samples;
//       // 4. Create a variable that filters the samples for the object with the desired sample number.
//       var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
//       //  5. Create a variable that holds the first sample in the array.
//       var result = resultArray[0];
  
//       // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
//       var ids = result.otu_ids.slice(0, 10);
//       var labels = result.otu_labels.slice(0, 10);
//       var values = result.sample_values.slice(0,10);
    
  
//       // 7. Create the yticks for the bar chart.
//       // Hint: Get the the top 10 otu_ids and map them in descending order  
//       //  so the otu_ids with the most bacteria are last. 
  
//       var yData = ids;
//       var yLabels = [];
//       yData.forEach(function(sample){
//           yLabels.push(`OTU ${sample.toString()}`);
//       });
  
//       console.log(yLabels)
  
//       // 8. Create the trace for the bar chart. 
//       var barTrace = {
//         x: values.slice(0,10).reverse(),
//         y: yLabels.reverse(),
//         text: result.otu_labels.slice(0,10),
//         type: "bar",
//         orientation: "h"
//     };
//       var barData = [barTrace];
        
//       Plotly.newPlot("bar", barData);;
//       // 9. Create the layout for the bar chart. 
//       var barLayout = {
//         title: "Top 10 Bacteria Cultures Found"
//       };
//       // 10. Use Plotly to plot the data with the layout. 
//       Plotly.newPlot("bar", barData, barLayout);
//     });
//   }
//   // Bar and Bubble charts
//   // Create the buildCharts function.
//   function buildBubbleCharts(sample) {
//     // Use d3.json to load and retrieve the samples.json file 
//     d3.json("samples.json").then((data) => {
      
  
//       // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
//       //Plotly.newPlot();
//       var samples = data.samples;
//       var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
//       var result = resultArray[0];
//       var ids = result.otu_ids.slice(0, 10);
//       // 1. Create the trace for the bubble chart.
//       var bubbleLabels = result.otu_labels;
//       var bubbleValues = result.sample_values;
//       var bubbleData = [{
//         x: ids,
//         y: bubbleValues,
//         text: bubbleLabels,
//         mode: "markers",
//          marker: {
//            size: bubbleValues,
//            color: bubbleValues,
//            colorscale: "Portland" 
//          }}
//       ];
      
//       // 2. Create the layout for the bubble chart.
//       var bubbleLayout = {
//         title: "Bacteria Cultures Per Sample",
//           xaxis: {title: "OTU ID"},
//           automargin: true,
//           hovermode: "closest"  
//       };
  
//       // 3. Use Plotly to plot the data with the layout.
//       Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
//     });
//   }
  
//   // Create the buildChart function.
//   function buildGaugeCharts(sample) {
//     // Use d3.json to load the samples.json file 
//     d3.json("samples.json").then((data) => {
//       console.log(data);
  
//       // Create a variable that holds the samples array. 
  
//       // Create a variable that filters the samples for the object with the desired sample number.
  
//       // 1. Create a variable that filters the metadata array for the object with the desired sample number.
//       var metadata = data.metadata;
//       var gaugeArray = metadata.filter(metaObj => metaObj.id == sample);
//       // Create a variable that holds the first sample in the array.
    
  
//       // 2. Create a variable that holds the first sample in the metadata array.
//       var gaugeResult = gaugeArray[0];
  
//       // Create variables that hold the otu_ids, otu_labels, and sample_values.
  
  
//       // 3. Create a variable that holds the washing frequency.
//       var wfreqs = gaugeResult.wfreq;
//       console.log(wfreqs)
//       // Create the yticks for the bar chart.
  
//       // Use Plotly to plot the bar data and layout.
      
      
//       // Use Plotly to plot the bubble data and layout.
  
     
      
//       // 4. Create the trace for the gauge chart.
//       var gaugeData = [{
//         value: wfreqs,
//         type: "indicator",
//         mode: "gauge+number",
//         title: {text: "<b> Belly Button Washing Frequency </b> <br></br> Scrubs Per Week"},
//         gauge: {
//           axis: {range: [null,10], dtick: "2"},
//           bar: {color: "black"},
//           steps:[
//             {range: [0, 2], color: "red"},
//             {range: [2, 4], color: "orange"},
//             {range: [4, 6], color: "yellow"},
//             {range: [6, 8], color: "lightgreen"},
//             {range: [8, 10], color: "green"}
//           ]
//         }
//       }];
      
//       // 5. Create the layout for the gauge chart.
//       var gaugeLayout = { 
//         automargin: true
//       };
  
//       // 6. Use Plotly to plot the gauge data and layout.
//       Plotly.newPlot("gauge", gaugeData, gaugeLayout);
//     });
//   }


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    console.log(data);
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var samplesArray = samples.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    firstSample = samplesArray[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    otu_ids = firstSample.otu_ids;
    otu_labels = firstSample.otu_labels;
    sample_values = firstSample.sample_values;
    console.log(otu_ids, otu_labels, sample_values);
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
    console.log(yticks);
    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: sample_values.slice(0,10).reverse(),
      y: yticks,
      text: otu_labels, sample_values,
      type: "bar", 
      orientation: "h"
    }];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
     title: "Top 10 Bacteria Cultures Found",
     margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        color: otu_ids,
        size: sample_values,
        colorscale: 'Earth'
      }
    }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: {title: "OTU ID" },
      margin: {
        l: 50,
        r: 50,
        b: 50,
        t: 50
      },
      hovermode:'closest'
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

    
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    
    // 2. Create a variable that holds the first sample in the metadata array.
    var result = resultArray[0];

    // 3. Create a variable that holds the washing frequency.
    var wfreq = parseFloat(result.wfreq);
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      value: wfreq,
      title: { text: "<b> Belly Button Washing Frequency </b> <br> Scrubs Per Week" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [null, 10] },
        bar: { color: "black" },
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange" },
          { range: [4, 6], color: "yellow" },
          { range: [6, 8], color: "yellowgreen" },
          { range: [8, 10], color: "forestgreen" }
        ],
      }
    }
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      automargin: true
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
    
  });
}