import { app } from '@/main.js';

describe('main.js', () => {
  test('Creates Vue app', () => {
    expect(app?._component?.name)
      .toEqual('App');
  });
});
