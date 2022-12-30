import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  profile = this.fb.group({
    name : ['Theurkar',Validators.required]
  })

  ngOnInit(): void {
  }
  aa:any = []
  submit(){
    // if(this.aa == [...this.aa,this.profile.value.name]){

    // }else{
    //   this.aa = [...this.aa,this.profile.value.name]
    //   console.log(this.aa)
    // }
    
    
  }
}
