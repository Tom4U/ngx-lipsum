import { Component, inject } from '@angular/core';
import { LipsumService, LipsumDirective, NgxLipsumComponent } from 'ngx-lipsum';

@Component({
  selector: 'app-root',
  template: `
    <h1>ngx-lipsum</h1>
    <h2>Service usage</h2>
    <p>{{ lipsumText }}</p>

    <h2>Component usage</h2>
    <ngx-lipsum></ngx-lipsum>

    <h2>Directive usage</h2>
    <textarea [lipsum]></textarea>
    <output [lipsum]></output>
    <p [lipsum]></p>
    <input [lipsum] />
    <ul [lipsum]></ul>
    <a [lipsum]></a>
  `,
  imports: [NgxLipsumComponent, LipsumDirective],
})
export class AppComponent {
  private readonly service = inject(LipsumService);

  public lipsumText: string = '';

  constructor() {
    this.lipsumText = this.service.get();
  }
}
