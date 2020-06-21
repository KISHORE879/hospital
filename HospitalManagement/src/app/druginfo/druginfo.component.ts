import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-druginfo',
  templateUrl: './druginfo.component.html',
  styleUrls: ['./druginfo.component.css']
})
export class DruginfoComponent implements OnInit {

  constructor(private drugService:HttpClient) { }
 drugData:object
  ngOnInit(): void {
  this.drugService.get('/assets/drug_info.json').subscribe(data=>this.drugData=data)
  }

}
