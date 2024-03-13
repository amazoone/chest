import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fart',
  templateUrl: './fart.component.html',
  styleUrls: ['./fart.component.scss']
})
export class FartComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    var data = {
      service_id: 'service_cs8iw4g',
      template_id: 'template_v4su5um',
      user_id: 'vfyjOvswpWDHtACKg',
      template_params: {
      }
    };

    this.http.post("https://api.emailjs.com/api/v1.0/email/send", data, {});
  }

}
