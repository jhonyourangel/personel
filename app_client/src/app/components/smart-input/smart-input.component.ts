import { Component, OnInit, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-smart-input',
  templateUrl: './smart-input.component.html',
  styleUrls: ['./smart-input.component.css']
})
export class SmartInputComponent implements OnInit {
  @Input() editMode = false;
  @Input() valoare = 'default value';
  @Input() type = '';

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setValoare(event: any) { // without type info
    this.valoare = event.target.value;
    this.valueChange.emit(this.valoare);
  }

}
