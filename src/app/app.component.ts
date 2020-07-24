import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';  

export interface Inspection {
  mat:string;
  matdesc:string;
  matchar:string;
  desc:string;
  llimit:string;
  ulimit:string;
  uom:string;
  insmethod:string;
  modrule:string;
}
const array:Inspection[]=[
{
  mat:"F12345678",
  matdesc:"Hard Ionized & Galvanised",
  matchar:"Rust Resistance Feature",
  desc:"Iron Capability",
  llimit:"1,000",
  ulimit:"2,000",
  uom:"Celsius",
  insmethod:"Calibration",
  modrule:"Applied"
},
{
  mat:"F12345678",
  matdesc:"Hard Ionized & Galvanised",
  matchar:"Rust Resistance Feature",
  desc:"Iron Capability",
  llimit:"1,000",
  ulimit:"2,000",
  uom:"Celsius",
  insmethod:"Calibration",
  modrule:"Applied"
},
{
  mat:"F12345678",
  matdesc:"Hard Ionized & Galvanised",
  matchar:"Rust Resistance Feature",
  desc:"Iron Capability",
  llimit:"1,000",
  ulimit:"2,000",
  uom:"Celsius",
  insmethod:"Calibration",
  modrule:"Applied"
},
{
  mat:"F12345678",
  matdesc:"Hard Ionized & Galvanised",
  matchar:"Rust Resistance Feature",
  desc:"Iron Capability",
  llimit:"1,000",
  ulimit:"2,000",
  uom:"Celsius",
  insmethod:"Calibration",
  modrule:"Applied"
},
{
  mat:"F12345678",
  matdesc:"Hard Ionized & Galvanised",
  matchar:"Rust Resistance Feature",
  desc:"Iron Capability",
  llimit:"1,000",
  ulimit:"2,000",
  uom:"Celsius",
  insmethod:"Calibration",
  modrule:"Applied"
}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  chart=[];
  chart1=[];
  displayedColumns: string[] = ['mat', 'matdesc', 'matchar', 'desc','llimit','ulimit','uom','insmethod','modrule'];
  dataSource = array;
  data_arr=[20,30,40];
  data_arr1=[60,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
  labels=["Preproduction","Inline","Final"];
    
  ngOnInit(): void {
    this.chart = new Chart('canvas', {  
      type: 'doughnut',  
      data: {  
        labels: this.labels,  
        datasets: [  
          {  
            borderWidth:0,
            data: this.data_arr,    
            backgroundColor: [  
              "#fddc0e",  
              "#58dfa7",  
              "#3c9cdf" 
            ],  
            fill: true  
          }  
        ]  
      },  
      options: {  
        tooltips:{displayColors:false,backgroundColor:'white',bodyFontColor:'black',borderColor:'rgba(0, 0, 0, 0.16)'},
        cutoutPercentage:70,
        rotation:-1,
        legend: {  
          display: true,
          position:'right',
          labels:{fontColor:'#464646',boxWidth:10,fontSize:14,usePointStyle:true}
        },  
        scales: {  
          xAxes: [{  
            display: false  
          }],  
          yAxes: [{  
            display: false  
          }],  
        }  
      }  
    });   

this.chart1 = new Chart('canvas1', {  
      type: 'doughnut',  
      data: {   
        datasets: [  
          {  
            borderWidth:2,
            data: this.data_arr1,    
            backgroundColor: [  
              "#fddc0e",  
              "#58dfa7"  
            ],  
            fill: true  
          }  
        ]  
      },  
      options: {  
        cutoutPercentage:80,
        legend: {  
          display: false,
        },  
        scales: {  
          xAxes: [{  
            display: false  
          }],  
          yAxes: [{  
            display: false  
          }],  
        }  
      }  
    });   
 
 
  }
}
