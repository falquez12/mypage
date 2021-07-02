import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { HostListener, Inject } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class NavbarComponent implements OnInit {
  scroll0 = true;
  public screenWidth: any;
  @Output() abrirside =new EventEmitter();
  @Output() tohome = new EventEmitter();
  @Output() toaboutme = new EventEmitter();
  @Output() toprojects = new EventEmitter();
  @Output() tocontact = new EventEmitter();
  constructor(

  ) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number === 0) {
      this.scroll0 = true;
    } else if (number > 15) {
      this.scroll0 = false;
    }
  }
  openmenu(){
    this.abrirside.emit();
  }
  eventhome(){
    this.tohome.emit();
  }
  eventaboutme(){
    this.toaboutme.emit();
  }
  eventproyecto(){
    this.toprojects.emit();
  }
  eventcontacto(){
    this.tocontact.emit();
  }

}
