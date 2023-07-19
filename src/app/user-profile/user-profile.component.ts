import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  onUserUpdated(updatedUser) {
    this.user = updatedUser;
  }
}
