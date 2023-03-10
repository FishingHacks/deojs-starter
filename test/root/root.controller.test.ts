import { describe, expect, test, beforeAll } from '@jest/globals';
import { generateController } from 'deojs/testing';
import { RootController } from '../../src/root/root.controller';

describe('RootController Test', () => {
  let controller: RootController;

  beforeAll(() => {
    controller = generateController(RootController);
  });

  test('getName without any arguments', () => {
    expect(controller.getName()).toBe('Hello, World!');
  });

  test('getName with a name', () => {
    expect(controller.getName('Name')).toBe('Hello, Name!');
  });

  test('getName with another name', () => {
    expect(controller.getName('Another Name')).toBe('Hello, Another Name!');
  });
});
