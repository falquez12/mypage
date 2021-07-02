import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() state:boolean =false;
  @Output() cerrarside =new EventEmitter();
  @Output() tohome = new EventEmitter();
  @Output() toaboutme = new EventEmitter();
  @Output() toprojects = new EventEmitter();
  @Output() tocontact = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  } 
  cerrar(){
   this.state=false
   
   this.cerrarside.emit();
  }

  eventhome(){
    this.cerrar()
    this.tohome.emit();
  }
  eventaboutme(){
    this.cerrar()
    this.toaboutme.emit();
  }
  eventproyecto(){
    this.cerrar()
    this.toprojects.emit();
  }
  eventcontacto(){
    this.cerrar()
    this.tocontact.emit();
  }
}
