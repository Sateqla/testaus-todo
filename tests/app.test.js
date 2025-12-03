import { describe, it, expect, beforeEach, vi } from 'vitest';
import { loadTasks } from '../public/app.js';

describe('loadTasks function', () => {
  beforeEach(() => {
    const store = {};
    vi.stubGlobal('localStorage', {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => { store[key] = value.toString(); },
      removeItem: (key) => { delete store[key]; },
      clear: () => { for (const key in store) delete store[key]; }
    });
  });

  it('should return an empty array when no data is stored', () => {
    expect(loadTasks()).toEqual([]);
  });

  it('should parse stored JSON correctly', () => {
    const dummy = [{ id: 't_123', topic: 'Demo' }];
    localStorage.setItem('todo_tasks_v1', JSON.stringify(dummy));
    expect(loadTasks()).toEqual(dummy);
  });
});
