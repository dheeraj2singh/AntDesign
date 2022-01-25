import { observable, Observable } from 'rxjs';
import { MenuService } from './service/menu.service';
import { FormModel } from './Interface/form-Interface';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Formconstants } from './form-constants/form-constant';
import { Component, OnInit } from '@angular/core';
import { FormService } from './service/form.service';
import { Router } from '@angular/router';

export enum form_enum {
  details_form,
  address_form,
  feedback_form,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public formconstant = Formconstants;
  public agree_term_disabled: boolean = Formconstants.boolean_true;
  menuList!: [];

  public get formindex(): typeof form_enum {
    return form_enum;
  }
  currentMenu: string;
  constructor(private service: MenuService) {
    this.currentMenu = 'home';
  }
  ngOnInit(): void {
    this.getMenu(this.currentMenu);
    this.currentMenu = window.location.pathname.slice(1);
  }
  // for geting the data from server

  getMenu(data: string) {
    this.service.getMenu(data).subscribe((res) => {
      this.menuList = res;
    });
  }

  getCurrentMenu(event: string) {
    this.currentMenu = event;
    this.getMenu(this.currentMenu);
  }
}
