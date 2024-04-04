import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/request-response';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import { UserService } from '../../../services/User.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()" />
    @if(user()){
      <section>
        <img
          [srcset]="user()!.avatar"
          [alt]="user()!.first_name"
        />

        <div>
          <h3>{{user()!.first_name}} {{user()!.last_name}}</h3>
          <p>{{user()!.email}}</p>
        </div>
      </section>
    } @else {
      <p>Cargando informacio</p>
    }
  `,
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private userService = inject(UserService);

  // public user = signal<User | undefined>(undefined)
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  )

  public titleLabel = computed(() => {
    return `Informacion del usuario: ${this.user()?.first_name ?? ''} ${this.user()?.last_name ?? ''}`
  })


  // constructor(){
  //   this.route.params.subscribe((params)=> {
  //     console.log({params})
  //   })
  // }
}
