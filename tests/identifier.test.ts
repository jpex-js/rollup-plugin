import test from 'ava';
import compiler from './compiler';

test('identifier', async(t) => {
  const output = await compiler('identifier.ts', { identifier: 'jpex2' });

  t.snapshot(output);
});
