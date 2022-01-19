import { AutocompleteSearchService } from './../../service/autocomplete-search.service';
import { Formconstants } from './../../form-constants/form-constant';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, Validators } from '@angular/forms';

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
    this.suggestion();
  }

  // autocomplete search list
  getsearchList(){
    this.auto_search.getAllUsername().subscribe(data=>
      { this.user_name=data,
        console.log(data)
      });
    
    // ((data:any) =>{
    //   data.forEach((data:any) => {
    //     this.user_name.push(data['username'])
    //   })
    //   });
    
  }

  onchecked(){  
    this.checked=this.details.get("agree_terms").value;
    this.myOutput.emit(this.checked);
   
  }
  
  serachfromlist(ser_list:any,s_term:string){
    let matches = [], i;
		for (i = 0; i < ser_list.length; i++) {
			if (ser_list[i].match(s_term)) {
				matches.push(ser_list[i]);
			}
		}
		
		return matches;
  }
  
  suggestion(){
    this.details.get('name').valueChanges.subscribe((res :string)=>{
      if(res.length>0){
        this.result=this.serachfromlist(this.user_name,res);
      }
    })
  }

}
