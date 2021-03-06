import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counting = this.counterService.counting
  constructor (private userService: UsersService, private counterService: CounterService) {}
}
