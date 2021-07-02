import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  fondodeskURL:string="../../assets/img/bannercoding.gif"
  fondomovURL:string="../../assets/img/avento.gif"
  public screenWidth: any;
  isdesk:boolean=true;
  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth<780){
      this.isdesk=false;
    }
  }


  @HostListener('window:resize', ['$event'])

  onResize() {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth<768){
      this.isdesk=false;
    }else{
      this.isdesk=true;
    }
  }
}
