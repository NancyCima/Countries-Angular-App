import { Component, Input, Output,EventEmitter } from '@angular/core';
// import {  } from 'stream';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent {


  @Input()
  placeholder:string=''

  @Output()
  onValue= new EventEmitter<string>()


  emitValue(value:string):void{
    this.onValue.emit(value)
  }
}
