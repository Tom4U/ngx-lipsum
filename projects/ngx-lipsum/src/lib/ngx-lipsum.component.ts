import { Component, inject, input, OnInit, SimpleChanges } from '@angular/core';
import { ILoremIpsumParams } from 'lorem-ipsum';
import { LipsumService } from './lipsum.service';

@Component({
  selector: 'ngx-lipsum',
  template: `<p [innerHTML]="text"></p>`,
  providers: [LipsumService],
})
export class NgxLipsumComponent implements OnInit {
  config = input<ILoremIpsumParams>();

  private readonly service = inject(LipsumService);

  public text!: string;

  ngOnInit() {
    this.setText();
  }

  ngOnChanges(_changes: SimpleChanges) {
    this.setText();
  }

  private setText() {
    this.text = this.service.get(this.config());
  }
}
