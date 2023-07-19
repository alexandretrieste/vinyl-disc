import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  @Input() user;
  @Output() userUpdated = new EventEmitter();

  updateUser() {
    let updatedUser = this.user;
    this.userUpdated.emit(updatedUser);
  }
}

