import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  sidebarstate:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  changesidebar(){
    this.sidebarstate=!this.sidebarstate;
  }
  tohome(){
    document.getElementById("home")?.scrollIntoView()
  }
  toaboutme(){
    document.getElementById("aboutme")?.scrollIntoView()
  }
  toprojects(){
    document.getElementById("proyectos")?.scrollIntoView()
  }
  tocontact(){
    document.getElementById("footer")?.scrollIntoView()
  }
}
