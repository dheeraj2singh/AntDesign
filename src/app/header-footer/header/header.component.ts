import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentMenu: string = '';
  @Output() public myOutput: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  clicked() {
    this.currentMenu = window.location.pathname.slice(1);
    this.myOutput.emit(this.currentMenu);
  }
}
