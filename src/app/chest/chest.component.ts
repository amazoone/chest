import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.scss']
})
export class ChestComponent implements OnInit {

  @ViewChild('password') password!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.password && this.password?.nativeElement?.value === '123456') {
      console.log('Form submitted', this.password.nativeElement.value);
      window.location.href = "/success";
    } else {
      console.log('Form not submitted', this.password?.nativeElement?.value);
    }
  }

}
