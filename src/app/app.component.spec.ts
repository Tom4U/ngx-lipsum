import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LipsumService } from 'ngx-lipsum';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [LipsumService],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
