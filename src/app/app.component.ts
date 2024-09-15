// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'dsa-roadmap-app';
// }

import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user.model'; // Import the User interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'dsa-roadmap-app';
  
  users: User[] = []; // Use the User interface

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDocuments().subscribe(data => {
      this.users = data; // Assuming data is of type User[]
    });
  }

  // Function to generate random name and age
  getRandomUser(): User {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAge = Math.floor(Math.random() * 50) + 1; // Random age between 1 and 50
    return { name: randomName, age: randomAge };
  }

  // Add a random user
  addUser() {
    const newUser = this.getRandomUser(); // Get a random user
    this.dataService.addDocument(newUser).then((docRef) => {
      console.log('User added with ID:', docRef.id);
    }).catch(error => {
      console.error('Error adding user:', error);
    });
  }
}