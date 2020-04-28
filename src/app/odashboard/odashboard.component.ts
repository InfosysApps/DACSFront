import { Component, OnInit } from '@angular/core';
//import { Script } from 'vm';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
declare var $: any;

@Component({
  selector: 'app-odashboard',
  templateUrl: './odashboard.component.html',
  styleUrls: ['./odashboard.component.css']
})
export class ODashboardComponent implements OnInit {

   // Pie
   public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label = ['New', 'Schdule a Call', 'On Hold', 'Checklist Pending', 'Sent for Approval', 'Ready for Closure'];
  public pieChartData: SingleDataSet = [300, 500, 100, 300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor() {

    //monkeyPatchChartJsTooltip();
    //monkeyPatchChartJsLegend();
   }

  ngOnInit(){
    
  }
}
