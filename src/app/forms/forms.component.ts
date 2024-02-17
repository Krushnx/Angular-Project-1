import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  newval:string = "hii";
  myVar:string = "";
  arr:Array<String> = ["Hii" , "Hello" , "Welcome"];
  ClckedMe()
  {
    this.arr.push(this.myVar);
    this.myVar = "";  
  }


}
