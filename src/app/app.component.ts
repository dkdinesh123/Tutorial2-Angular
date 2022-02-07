import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //declaration
  title = 'My Angular';
  name='Dinesh';
  num=30;
  displayval:string='';
  title1:string = 'Counter With Angular:';
  count=0;
  title2:string='Property Binding:';
  
  name2:string='Tommy';

  disable=false;

  title3:string = "If-Else:"
  show=false
  // show=true

  title4:string='Multiple-condition Else if';
  color:string="red";

  title5:string = "Switch-case";
  color1:string="orange";


  title6:string="Loop";
  customers=['Dhoni','Dravid','Kohli','Clark'];
  customerdetails=
  [
    {Location:'Delhi',Age:20,email:'Dhoni@gmail.com',Phone:4557},
    {Location:'Ranchi',Age:22,email:'Dravid@gmail.com',Phone:2345},
    {Location:'Kolkata',Age:24,email:'Vk@gmail.com',Phone:8898},
    {Location:'Pune',Age:25,email:'clark@gmail.com',Phone:2312}
  ]

  title7:string="NestedLoop && NestedArray";
  users=[
    {name:'Anderson',Age:30,Phone:8899,Socialmedia:['Instagram','LinkedIn','Twitter']},
    {name:'Korey',Age:31,Phone:7768,Socialmedia:['Instagram','LinkedIn','Twitter','Google']},
    {name:'Kane',Age:32,Phone:6654,Socialmedia:['Instagram','Facebook','Twitter','Google']},
    {name:'Willamson',Age:33,Phone:8769,Socialmedia:['Instagram','Facebook','Twitter','Google']},
  ]

  title8:string="Style Binding"
  // color:string="orange";
  bgcolor:string="yellow";

  updatedcolor()
  {
    this.color="blue";
    this.bgcolor='yellowgreen';
  }

  title9:string="Header";


  title10:string="Forms Module"
  userdata:any={}
  getforms(value:NgForm)
  {
    console.warn(value);
    this.userdata=value;
  }

  title11:string="Toggle Element"
  display=true;
  getData()
  {
    this.display=!this.display;
  }
  title12:string="Bootstrap with Angular"

  title13:string="Material UI"


  title14:string="Todo List";
  list:any[]=[];
  gettask(data:string)
  {
      
      this.list.push
      (
        {id:this.list.length,
        name:data}
      )
      console.warn("this.list"); 
  }
  removetask(id:number)
  {
    console.warn(id);
    
     this.list=this.list.filter(data=>data.id!==id)
  }



  title15:string="Data parent to child component"
  data=15;
  

  updatebutton()
  {
    this.data=Math.floor(Math.random()*15);
  }

  title16:string="Reusable Component"


  getval()
  {
    return "Name Is Dinesh"
  }
  getname(Firstname:string | number)
  {
    alert(Firstname);
    // alert(Lastname);
  }

  getname2(val:string)
  {
    console.warn(val);
  }

  getvalue(val:string)
  {
    console.warn(val);
    this.displayval=val;
  }

getvalue1(val:string)
{
  console.warn(val);
}
  // getname1(Lastname:string)
  // {
  //   alert(Lastname);
  // }
  // counter()
  // {
  //   this.count--;
    
  // }
  counter1(type:string)
  {
    // this.count++;
    type==='add'?this.count++:this.count--;
  }


}
