import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/User.service';
import { TitleComponent } from '@shared/title/title.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterLink],
  template: `
    <app-title title="Listado de Usuario"/>


    <ul>
      @for (user of userService.users(); track user.id) {
        <li class="flex items-center my-2 cursor-pointer">
          <img
            [srcset]="user.avatar"
            [alt]="user.first_name"
            class="rounded w-14"
          >

          <a
            [routerLink]="['/dashboard/user', user.id]"
            class="mx-5 hover:underline"
          >
            {{ user.first_name }} {{ user.last_name }}
          </a>
        </li>
      } @empty {
        <h3>Espere por favor</h3>
      }
    </ul>
  `,
})
export default class UsersComponent {
  public userService = inject(UserService)

}
