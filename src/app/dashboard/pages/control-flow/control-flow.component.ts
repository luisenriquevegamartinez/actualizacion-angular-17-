import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal<boolean>(false);
  public frameworks = signal<string[]>(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal<string[]>([]);

  public toggleContent(){
    this.showContent.update((value) => !value)
  }

  public grade = signal<Grade>('A')
  public changeGrade(){
    this.grade.update( (value)=> value === 'A' ? 'B' : value === 'B' ? 'F' : 'A')
  }

}
