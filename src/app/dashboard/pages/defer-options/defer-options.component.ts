import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, HeavyLoadersFastComponent],
  template: `
    <app-title title="Defer Triggers"/>

    <section>
      <h1 class="text-xl">Interacciones</h1>
      <hr class="my-2">

      @defer(on interaction) {
        <app-heavy-loaders-fast cssClass="bg-blue-500 h-20">
          <span>On Interaction</span>
        </app-heavy-loaders-fast>
      } @placeholder {
        <div class="w-full h-20 bg-purple-100">
          CLick en el div
        </div>
      }
    </section>

    <section>
      <hr class="my-2">

      <button #btnInteraction class="p-2 bg-blue-500 hover:bg-blue-700 transition-all rounded text-white my-2">
        Click me!
      </button>
      @defer(on interaction(btnInteraction)) {
        <app-heavy-loaders-fast cssClass="bg-blue-500 h-20">
          <span>On Interaction</span>
        </app-heavy-loaders-fast>
      } @placeholder {
        <div class="w-full h-20 bg-purple-100">
          Place Holder div
        </div>
      }
    </section>

    <section>
      <hr class="my-2">

      @defer(on hover) {
        <app-heavy-loaders-fast cssClass="bg-blue-500 h-20">
          <span>On Hover</span>
        </app-heavy-loaders-fast>
      } @placeholder {
        <div class="w-full h-20 bg-purple-100">
          Placeholder div
        </div>
      }
    </section>

    <section>
      <hr class="my-2">

      @defer(on immediate) {
        <app-heavy-loaders-fast cssClass="bg-blue-500 h-20">
          <span>On Inmediate</span>
        </app-heavy-loaders-fast>
      } @placeholder {
        <div class="w-full h-20 bg-purple-100">
          Placeholder div
        </div>
      }
    </section>

    <section>
      <hr class="my-2">

      @defer(on timer(2000)) {
        <app-heavy-loaders-fast cssClass="bg-green-500 h-20">
          <span>On Timer</span>
        </app-heavy-loaders-fast>
      } @placeholder {
        <div class="w-full h-20 bg-purple-100">
          2 Segundos
        </div>
      }
    </section>

    <section>
      <hr class="my-2">

      @defer(on hover; prefetch on idle) {
        <app-heavy-loaders-fast cssClass="bg-green-500 h-20">
          <span>On Hover, On idle</span>
        </app-heavy-loaders-fast>
      } @placeholder {
        <div class="w-full h-20 bg-purple-100">
          Hover
        </div>
      }
    </section>
  `,
  styles: ``
})
export default class DeferOptionsComponent {

}
