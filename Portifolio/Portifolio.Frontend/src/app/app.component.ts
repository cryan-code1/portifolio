import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <h1>Previsão do Tempo</h1>
    <ul>
      <li *ngFor="let item of forecasts">
        {{ item.date }} - {{ item.summary }} - {{ item.temperatureC }}°C
      </li>
    </ul>
  `,
})
export class AppComponent implements OnInit {
  forecasts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://localhost:7037/weatherforecast')
      .subscribe(data => this.forecasts = data);
  }
}
