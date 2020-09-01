import test from 'ava';
import compiler from './compiler';

test('package json', async(t) => {
  const output = await compiler('publicPath-package-json.ts', { publicPath: true });

  t.snapshot(output);
});
