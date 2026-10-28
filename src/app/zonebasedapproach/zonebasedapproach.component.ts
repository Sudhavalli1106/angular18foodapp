import { Component } from '@angular/core';

@Component({
  selector: 'app-zonebasedapproach',
  standalone: true,
  imports: [],
  template: `
    <h2>Driver Tracking Dashboard</h2>
    <p>Driver status: {{ driverStatus }}</p>
  `,
})
export class ZonebasedapproachComponent {
  driverStatus = 'Available';

  constructor() {
    setTimeout(() => {
      this.driverStatus = 'On the way';
      console.log('Timer completed');
    }, 3000);
  }
}
