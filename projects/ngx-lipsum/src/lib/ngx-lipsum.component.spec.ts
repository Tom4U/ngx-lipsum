import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LipsumService } from './lipsum.service';
import { NgxLipsumComponent } from './ngx-lipsum.component';

describe('NgxLipsumComponent', () => {
  let component: NgxLipsumComponent;
  let fixture: ComponentFixture<NgxLipsumComponent>;

  let serviceMock: jest.Mock<LipsumService>;
  let spy: jest.SpyInstance;

  beforeEach(async () => {
    jest.mock('./lipsum.service', () => ({
      get: jest.fn(),
    }));

    serviceMock = LipsumService as jest.Mock<LipsumService>;

    spy = jest
      .spyOn(serviceMock.prototype, 'get')
      .mockImplementation(() => 'mocked response');

    await TestBed.configureTestingModule({
      imports: [NgxLipsumComponent],
      providers: [LipsumService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLipsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('OnInit: should set the text value by asking the LipsumService', () => {
    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.text).toEqual('mocked response');
  });

  it('OnChanges: should set the text value by asking the LipsumService with a new custom config', () => {
    fixture.componentRef.setInput('config', {
      count: 100,
    });

    fixture.detectChanges();

    component.ngOnChanges({
      config: {
        currentValue: {
          count: 100,
        },
      } as SimpleChange,
    });
    expect(spy).toHaveBeenCalledWith({ count: 100 });
  });
});
