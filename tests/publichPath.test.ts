import test from 'ava';
import compiler from './compiler';

test('imports', async(t) => {
  const output = await compiler('publicPath-imports.ts', { publicPath: 'mylib' });

  t.snapshot(output);
});

test('locals', async(t) => {
  const output = await compiler('publicPath-locals.ts', { publicPath: 'mylib2' });

  t.snapshot(output);
});

test('node modules', async(t) => {
  const output = await compiler('publicPath-node-modules.ts', { publicPath: 'mylib3' });

  t.snapshot(output);
});
