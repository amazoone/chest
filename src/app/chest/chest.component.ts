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

  showError: boolean = false;
  showSuccess: boolean = false;

  onSubmit() {
    if (this.password && this.password?.nativeElement?.value === '123456') {
      // console.log('Form submitted', this.password.nativeElement.value);
      // window.location.href = "/fart";
      this.showSuccess = true;
      this.showError = false;
    } else {
      this.showSuccess = false;
      this.showError = true;
    }
  }

}
