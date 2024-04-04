import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeavyLoadersSlowComponent, TitleComponent],
  template: `

  <app-title  title="Defer Views / Blocs"/>
    <section class="grid grid-cols-1">
      @defer(){
        <app-heavy-loaders-slow cssClass="bg-blue-500"/>
      } @placeholder {
        <p class="h-[600px] w-full bg-gradient-to-r from-gray-200 to-gray-400 animate-pulse">

        </p>
      }
      @defer(on idle){
        <app-heavy-loaders-slow cssClass="bg-green-500"/>
      } @placeholder {
        <p class="h-[600px] w-full bg-gradient-to-r from-gray-200 to-gray-400 animate-pulse">

        </p>
      }
      @defer(on viewport){
        <app-heavy-loaders-slow cssClass="bg-purple-500"/>
      } @placeholder {
        <p class="h-[600px] w-full bg-gradient-to-r from-gray-200 to-gray-400 animate-pulse">

        </p>
      }
    </section>
  `,
  styles: ``
})
export default class DeferViewsComponent {

}
