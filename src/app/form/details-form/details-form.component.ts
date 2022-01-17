import { AutocompleteSearchService } from './../../service/autocomplete-search.service';
import { Formconstants } from './../../form-constants/form-constant';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {
  @Output() myOutput:EventEmitter<boolean>=new  EventEmitter<boolean>(); 

  checked:boolean=Formconstants.checked;
  @Input() details:any;
  searchList:any=[];
  user_name:any=[];
  result:any=[];

    constructor(private auto_search:AutocompleteSearchService) {
   
   }

  ngOnInit(): void {
   
    this.getsearchList();
  }
  getsearchList(){
    this.auto_search.getAllUsername().subscribe((data:any) =>{
      data.forEach((data:any) => {
        this.user_name.push(data['username'])
      })
      });
    
  }

  onchecked(){  
    this.checked=this.details.get("agree_terms").value;
    this.myOutput.emit(this.checked);
   
  }
  searchonKeyup(event:any){
    let search_term=event.target.value;
    if (search_term.length>0){
      console.log("in if")
      this.result=this.serachfromlist(this.user_name,search_term);
    }
  }
  serachfromlist(ser_list:any,s_term:string){
    let matches = [], i;
		for (i = 0; i < ser_list.length; i++) {
			if (ser_list[i].match(s_term)) {
				matches.push(ser_list[i]);
			}
		}
		//console.log('matches: ' + matches);
		return matches;
  }

}
