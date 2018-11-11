import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private appService: AppService){}

  ngOnInit(){
  }
  title = 'testeAPP';
  clickMe(){
   this.appService.abc(4).subscribe(res=>{
     let data = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' });
     FileSaver.saveAs(data, "teste.xls");
   });
  };
}
