import { describe, it, expect } from 'vitest';
import { generateId } from '../public/app.js';

describe('generateId utility', () => {
  it('should return a non-empty string', () => {
    const id = generateId();
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(0);
  });
});
