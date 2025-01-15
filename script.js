//fetch teprature data by NASA from 
// https://data.giss.nasa.gov/gistemp/graphs/graph_data/Global_Mean_Estimates_based_on_Land_and_Ocean_Data/graph.txt
// store in local file temperature.txt

getData()
.catch(err=>{
    // console.log(err)
})

async function getData() {

    const response = await fetch("temperature.txt")
    const text = await response.text()
    // console.log(text)
    const years = [], noSmoothing = [], lowess = []

    const lines  = text.split("\n")
    for(const line of lines){
        const column = line.split(`     `)
        years.push(column[0])
        noSmoothing.push(column[1])
        lowess.push(column[2])
    }


     console.log(years)
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: '# of No_Smoothing',
          data: noSmoothing,
           borderWidth: 1
        }]
      },
     
    });



}