import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild("name3") inputEl:HTMLInputElement;
  @ViewChild("name4") inputElement : ElementRef<HTMLInputElement>;
  getValue(){
    let element : any = document.getElementById("name");
    console.log(element.value);
  }
  getValueEvent(event:any){
    console.log(event);
  }

  getValueViewChild(){
    console.log(this.inputEl);
  }
  getValueViewChildElementRef(){
    console.log(this.inputElement.nativeElement.value);
  }
}
