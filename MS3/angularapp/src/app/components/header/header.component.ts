import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Add a method to handle navigation, e.g., navigate to a specific route
  navigateTo(route: string): void {
    // You can implement your navigation logic here
    console.log('Navigating to:', route);
    // Additional logic like router.navigate() can be added based on your app's routing configuration
  }
}
