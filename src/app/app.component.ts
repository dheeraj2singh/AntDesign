import { Observable } from 'rxjs';
import { AutocompleteSearchService } from './service/autocomplete-search.service';
import { FormModel } from './model/form-model.model';
import { Form, FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Formconstants } from './form-constants/form-constant';
import { Component, Input, OnInit } from '@angular/core';
import { FormService } from './service/form.service';

export enum form_enum{
  details_form,
  address_form,
  feedback_form
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

 agree_term_disabled=true;
  title = 'AntDesign';
 index:number=Formconstants.Form_Index;
 myform:any;
 dataList!:FormModel[];

data!:FormModel;

public get formindex(): typeof form_enum{
  return form_enum;
}
constructor(private fb:FormBuilder,private service:FormService){}
ngOnInit(): void {
  this.createForm()
 
  this.getdata();
 

}
getdata(){
  this.service.getdata().subscribe(res=>this.dataList=res,error=>console.error(error));
  
}

GetChildData(event:boolean){
  
  this.agree_term_disabled=!event;
  console.log("child",this.agree_term_disabled)
  
}

  pre(){
    this.index-=1;
    this.myform.controls['house_no'].clearValidators();
  }

  setValidation(){
      if(this.myform.get("email").valueChanges && this.myform.get("email").value.length>0){  
        this.myform.controls['house_no'].setValidators([Validators.required]);    
      }
  }
  next(){
   
    this.index+=1;
    this.setValidation();


  }
  done(){
    console.log("done");
  }
 
  onIndexChange(event:any){
    this.index=event;
  }
    createForm(){
      this.myform=this.fb.group({
        agree_terms:['false'],
        name:['',[Validators.required,Validators.minLength(5)]],
        email:['',[Validators.email]],
        phone:['',[Validators.minLength(10),Validators.maxLength(10)]],
        gender:[''],
        
          house_no:[''],
          street:[''],
          city:[''],
          country:[''],
        
        
          feedback:[''],
          rate:[''],
               
      });
    }

    onsubmit(){
      this.data=this.myform.value;
      // this.dataList.push(this.data);
      console.log(this.dataList)
      this.index=Formconstants.Form_Index;
      this.service.addData(this.data).subscribe(res=>{console.log(res),this.getdata()},error=>console.log(error))
      this.createForm();
    }

    remove(id:number){
      this.service.removedata(id).subscribe(res=>this.getdata());
      
    }
    

}
