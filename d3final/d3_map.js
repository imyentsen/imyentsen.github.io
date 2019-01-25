// load data
d3.csv("/data/cities.csv").then(function(data) {
    console.log(data[0]);
  });
  

// make D3 aware of the <svg> element in the HTML
var canvas = d3.select("svg");

// get <svg> width and height from HTML instead of hard-coding values
var canvasWidth = +canvas.attr("viewBox").split(" ")[2],
    canvasHeight = +canvas.attr("viewBox").split(" ")[3];

// define the map projection
var projection = d3
  .geoMercator()
  .translate([canvasWidth / 2.4, canvasHeight / 1.4])
  .center([0, 0])
  .rotate([0, 0, 0])
  .scale(canvasWidth / (1.35 * Math.PI));


// path
var geoPathGenerator = d3.geoPath().projection(projection);


// MAP //

// draw map
canvas.selectAll("path")
    .data(world.features)
    .enter()
        .append("path")
        .attr("d", geoPathGenerator)        
        .attr("class","feature")
        .on("mouseover", function(d){ 
            d3.select(this).attr("class", "feature_clicked")
            addLabel(d.id)  
            addCapitalCircle(d.id)    
        })
        .on("mouseout", function(d){
            d3.select(this).attr("class", "feature")
            hideLabel(d.id)   
            hideCapitalCircle()   
        })


// put capitals
canvas.selectAll("rect")
    .data(capitals.features)
    .enter()
        .append("rect")
        .attr("class",function(d) {return "capitals"+d.properties.iso3})
        .attr("x", function(d) {return projection(d.geometry.coordinates)[0];})
        .attr("y", function(d) {return projection(d.geometry.coordinates)[1];})
        .attr("width", 3)
        .style("fill","White")
        .style("opacity","0")
        .transition()
            .attr("delay", 100)
            .attr("duration", 1000)
            .attr("height", 30)


// add labels
canvas.selectAll("text")
.data(capitals.features)
.enter()
    .append("text")
    .attr("class",function(d) { return "label"+d.properties.iso3})
    .text(function(d) {
                return d.properties.country;
            })
    .attr("x", function(d) {return projection(d.geometry.coordinates)[0] - 20;})
    .attr("y", function(d) {return projection(d.geometry.coordinates)[1] + 20;})
    .style("fill","White")
    .style("font-size","10px")
    .style("font-family","Arial, Helvetica, sans-serif")
    .style("opacity","0")



// FUNCTION //


// function add label 
function addLabel(d){
  // add labels
    canvas.select(".label"+d)
        .style("opacity","1")
}      


// function hide label 
function hideLabel(d){
    // hide labels
      canvas.select(".label"+d)
          .style("opacity","0")
}    
  
// function put ball according to the values // Match the ID given by the shell to the cordinates of the capticals with the same ID (name: iso3) in this function
function addCapitalCircle(d){
    console.log("id of this country: "+ d)

    // get to know the order of the element in capitals.js, which matches the value of d (ID of country)
    var orderInCapitals;
    for(var i = 0; i < capitals.features.length; i++) {
        if(capitals.features[i].properties.iso3 === d) {
            orderInCapitals = i;
        }
    }
    console.log("orderInCapitals: " + orderInCapitals)

    // get to know the order of the element in inward.js, which matches the value of d (ID of country)
    var orderInInward;
    for(var i = 0; i < Inward.list.length; i++) {
        if(Inward.list[i].id === d) {
            orderInInward = i;
        }
    }
    console.log("orderInInward: " + orderInInward)

    // add labels
    for(var i = 0; i < 14; i++) {
        canvas.append("circle")
            .style("fill","Pink")
            .style("opacity","1")
            .attr("class", "inward")

                .attr("cx", function() {
                    console.log("coordinates X of this country: " + (capitals.features[orderInCapitals].geometry.coordinates)[0])
                    return projection(capitals.features[orderInCapitals].geometry.coordinates)[0]
                })
                .attr("cy", function() {
                    return projection(capitals.features[orderInCapitals].geometry.coordinates)[1]
                })
                .attr("r", function() {
                    console.log("height inward FDI 2004: " + Math.abs(
                        Inward.list[orderInInward][2004 + i])
                        )
                    return Math.abs(
                        Inward.list[orderInInward][2004 + i])/200
                })
                .transition()
                    .attr("duration", 10000)
                    .attr("cx",  function() {
                        return projection(capitals.features[120].geometry.coordinates)[0]
                    })
                    .attr("cy",  function() {
                        return projection(capitals.features[120].geometry.coordinates)[1]
                    })
    }
}    


function hideCapitalCircle(){
    // hide circle
    canvas.select(".inward")
    .style("opacity","0")
}    

  
  