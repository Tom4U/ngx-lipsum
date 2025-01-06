import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LipsumDirective } from './lipsum.directive';

@Component({
  template: `
    <textarea [lipsum]></textarea>
    <p [lipsum]></p>
    <input [lipsum] />
    <ul [lipsum]></ul>
    <a [lipsum]></a>
  `,
  imports: [LipsumDirective],
})
class TestComponent {}

describe('LipsumDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({}).createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should have five lipsum elements', () => {
    const des = fixture.debugElement.queryAll(By.directive(LipsumDirective));
    expect(des.length).toBe(5);
  });
});
