import { describe, expect, test, beforeAll } from '@jest/globals';
import { RootService } from '../../src/root/root.service';

describe('RootController Test', () => {
  let service: RootService;

  beforeAll(() => {
    service = new RootService();
  });

  test('helloWorld without any arguments', () => {
    expect(service.helloWorld()).toBe('Hello, World!');
  });

  test('helloWorld with a name', () => {
    expect(service.helloWorld('Name')).toBe('Hello, Name!');
  });

  test('helloWorld with another name', () => {
    expect(service.helloWorld('Another Name')).toBe('Hello, Another Name!');
  });
});
