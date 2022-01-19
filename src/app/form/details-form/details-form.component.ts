import { AutocompleteSearchService } from './../../service/autocomplete-search.service';
import { Formconstants } from './../../form-constants/form-constant';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {
  @Output() public myOutput: EventEmitter<boolean> = new EventEmitter<boolean>();
  public checked: boolean = Formconstants.checked;
  public formconstant = Formconstants;
  @Input() public details: FormGroup;
  public user_name: string[];
  public result: string[];
  constructor(private auto_search: AutocompleteSearchService, private fb: FormBuilder) {
    this.details = this.fb.group({});
    this.user_name = [];
    this.result = [];
  }

  ngOnInit(): void {
    this.getsearchList();
    this.suggestion();
  }

  // autocomplete search list
  getsearchList() {
    this.auto_search.getAllUsername().subscribe(data => {
      this.user_name = data
    });
  }

  onchecked() {
    this.checked = this.details.controls.agree_terms.value;
    this.myOutput.emit(this.checked);
  }

  serachfromlist(ser_list: any, s_term: string) {
    let matches = [], i;
    for (i = 0; i < ser_list.length; i++) {
      if (ser_list[i].match(s_term)) {
        matches.push(ser_list[i]);
      }
    }
    return matches;
  }

  suggestion() {
    this.details.controls.name.valueChanges.subscribe((res: string) => {
      if (res && res.length > 0) {
        this.result = this.serachfromlist(this.user_name, res);
      }
    })
  }
}
