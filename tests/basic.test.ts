import test from 'ava';
import compiler from './compiler';

test('basic', async(t) => {
  const output = await compiler('basic.ts');

  t.snapshot(output);
});
