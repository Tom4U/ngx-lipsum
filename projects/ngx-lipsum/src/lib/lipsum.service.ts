import { Injectable } from '@angular/core';
import { loremIpsum, ILoremIpsumParams } from 'lorem-ipsum';

@Injectable()
export class LipsumService {
  constructor() {}
  get(params?: ILoremIpsumParams) {
    return loremIpsum(params);
  }
}
