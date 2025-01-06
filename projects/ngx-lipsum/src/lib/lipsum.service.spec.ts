import { TestBed } from '@angular/core/testing';
import { LipsumService } from './lipsum.service';
import { getTestParams } from './test-utils';

describe('LipsumService', () => {
  let service: LipsumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LipsumService],
    });
    service = TestBed.inject(LipsumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a lorem ipsum text with default configuration', () => {
    // "5" as lorem-ipsum package defaults use "one sentence with at least 5 words per sentence"
    expect(service.get().split(' ').length).toBeGreaterThanOrEqual(5);
  });

  it('should get a lorem ipsum text with a custom configuration', () => {
    const { params, result } = getTestParams();
    const serviceResult = service.get(params);
    expect(serviceResult).toEqual(result);
  });
});
