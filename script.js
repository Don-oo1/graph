//fetch teprature data by NASA from 
// https://data.giss.nasa.gov/gistemp/graphs/graph_data/Global_Mean_Estimates_based_on_Land_and_Ocean_Data/graph.txt
// store in local file temperature.txt

getData()
.catch(err=>{
    console.log(err)
})

async function getData() {

    const response = await fetch("temperature.txt")
    const text = await response.text()
    console.log(text)
    
}