import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-doctorinfo',
  templateUrl: './doctorinfo.component.html',
  styleUrls: ['./doctorinfo.component.css']
})
export class DoctorinfoComponent implements OnInit {

  constructor(private doctService:HttpClient) { }
  doctorData:object;
  ngOnInit(): void {
  this.doctService.get('./assets/doctors_info.json').subscribe(data=>this.doctorData=data)
  
  }

}
